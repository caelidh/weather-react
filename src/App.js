import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />
      <footer>This project was coded by Caelidh Liddell and is open-sourced on <a href="https://github.com/caelidh/weather-react" target="_blank" rel="noreferrer">Github</a></footer>
    </div>
    </div>
  );
}

export default App;
