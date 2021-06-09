import "./App.css";
import React, { useState, useEffect } from "react";

const Data = () => {
  const [jokeSetup, setJokeSetup] = useState();
  const [punchline, setPunchline] = useState();
  const [show, setShow] = useState(false);
  const [next, setNext] = useState(false);
  const url = "https://official-joke-api.appspot.com/jokes/random";

  const fetchJoke = async () => {
    const fetchUrl = await fetch(url);
    const fetchedJson = await fetchUrl.json();

    const { id, type, setup, punchline } = fetchedJson;

    setJokeSetup(setup);
    setPunchline(punchline);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  useEffect(() => {
    fetchJoke();
  }, [next]);

  return (
    <React.Fragment>
      <div className="jokes-data">
        <div className="jokes-data-container">
          <div className="jokes-content-container">
            <h4 className="jokes">{jokeSetup}</h4>
            <p className="punchline ">{show === true ? punchline : null}</p>
          </div>
          <div className="btn-container">
            {/* <button className="btn" onClick={() => fetchJoke()}>
              Setup
            </button> */}
            <button className="btn" onClick={() => setShow(!show)}>
              Punchline
            </button>
            <button className="btn" onClick={() => setNext(!next)}>
              Next Joke
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
