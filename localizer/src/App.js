import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './styles.css';

import api from './services/api';

function App() {

  const [input, setInput] = useState('')

  async function handleSearch() {
    // 01310930/json/

    if(input === '') {
      alert("Type your ZIP CODE")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      console.log(response.data)

    } catch {
      alert("Ops, ZIP not found")
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">ZIP CODE LOCALIZER</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Type your ZIP code"
        value={input}
        onChange={(event) => setInput(event.target.value) }
        />

      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color="white"/>
      </button>
      </div>

      <main className="main">
        <h2>ZIP: H2X 2S2</h2>

        <span>Boulevard Robert Bourassa</span>
        <span>777</span>
        <span>Downtown</span>
        <span>Montreal, QC</span>
      </main>

    </div>
  );
}

export default App;
