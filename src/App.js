import React from "react";
import FromCurrency from "./components/FromCurrency/FromCurrency";
import "./App.scss";
import ToCurrency from "./components/ToCurrency/ToCurrency";

function App() {
  return (
    <div className="App">
      <FromCurrency />
      <ToCurrency />
    </div>
  );
}

export default App;
