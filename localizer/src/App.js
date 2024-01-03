import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './styles.css';

import api from './services/api';

function App() {

  const [input, setInput] = useState('')
  const [zip, setZip] = useState({});

  async function handleSearch() {
    // 01310930/json/

    if(input === '') {
      alert("Type your ZIP CODE")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setZip(response.data)
      setInput("");

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

      {Object.keys(zip).lenght > 0}
      <main className="main">
        <h2>ZIP: {zip.cep}</h2>

        <span>{zip.logradouro}</span>
        <span>Complemento: {zip.complemento}</span>
        <span>{zip.bairro}</span>
        <span>{zip.localidade} - {zip.uf}</span>
      </main>

    </div>
  );
}

export default App;
