import "./App.css";
import React, { useState, useEffect } from "react";

const Data = () => {
  const [isClicked, setIsClicked] = useState(false);

  // const [joke, setJoke] = useState();

  const url = "https://official-joke-api.appspot.com/jokes/random";

  const fetchJoke = async () => {
    const fetchUrl = await fetch(url);
    const fetchedJson = await fetchUrl.json();

    const { id, type, setup, punchline } = fetchedJson;

    
  };

  return (
    <React.Fragment>
      <div className="jokes-data">
        <div className="jokes-data-container">
          <div className="jokes-content-container">
            <h4 className="jokes">{punchline}</h4>
          </div>
          <div className="btn-container">
            <button className="btn" onClick={() => fetchJoke()}>
              Random
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <div className="jokes-container">
        <h1>Jokes Generator</h1>
        <Data></Data>
      </div>
    </div>
  );
}

export default App;
