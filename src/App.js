import "./App.css";
import React from "react";

const Data = () => {
  return (
    <React.Fragment>
      <div className="jokes-data">
        <div className="jokes-data-container">
          <div className="btn-container">
            <button className="btn">Random</button>
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
