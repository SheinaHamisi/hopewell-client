import React from "react";
import logo from "./assets/images/logo.png";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App-header dark">
      <img src={logo} className="App-logo" alt="logo" />

      <h2 className="text-primary">
        This is the primary colors corporate colors
      </h2>
    </div>
  );
}

export default App;
