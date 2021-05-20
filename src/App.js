import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    setCounter(counter - 1);
  }

  const [sayHi, setSayHi] = useState("May I have your name?");

  function whenClicked() {
    let name = prompt("please enter your name");
    setSayHi(`Hi ${name} !`);
  }

  return (
    <div className="App">
      <button onClick={decrease}>-</button>
      <span>{counter}</span>
      <button onClick={increase}>+</button>
      <p>{sayHi}</p>
      <button onClick={whenClicked}>onClick</button>
    </div>
  );
}
