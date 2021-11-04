import "./App.css";

import { useState, useEffect } from "react";

import Characters from "../src/components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(characterList);

  return (
    <div className="App">
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
