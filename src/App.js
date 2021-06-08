import "./App.css";
import React from "react";

const Data = () => {
  return (
    <React.Fragment>
      <div className="jokes-data">
        <div className="jokes-data-container">
          <div className="jokes-content-container">
            <h4 className="jokes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore ad pariatur minus obcaecati quibusdam enim ex eius nobis labore!</h4>
          </div>
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
