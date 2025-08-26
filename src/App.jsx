import { useState } from "react";
import "./styles.css";

function App() {
  const [isOn, setIsOn] = useState(false);
  const [display, setDisplay] = useState("0");

  function toggleOnOff() {
    if (isOn) {
      setIsOn(false); // turn off
      setDisplay("0");
    } else {
      setIsOn(true); // turn on
      setDisplay("0");
    }
  }

  // Clear textarea
  function clearAll() {
    if (!isOn) return;
    setDisplay("0");
  }

  return (
    <>
      <div className="board">
        <div className="row">
          <textarea id="input" readOnly value={isOn ? display : ""}></textarea>
        </div>
        <div className="row">
          <button onClick={clearAll}>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>/</button>
        </div>
        <div className="row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>X</button>
        </div>
        <div className="row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div className="row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div className="row">
          <button onClick={toggleOnOff}>{isOn ? "Off" : "On"}</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
