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

  // Handle number button clicks
  function numberClickHandler(number) {
    setDisplay((oldNum) => {
      if (oldNum === "0") {
        return String(number);
      }
      return oldNum + String(number);
    });
  }

  // Handle decimal button click
  function decimalClickHandler() {
    setDisplay((prevBtn) => {
      if (prevBtn.includes(".")) {
        return prevBtn;
      }
      return prevBtn === "0" ? "0." : prevBtn + ".";
    });
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
          <button onClick={() => numberClickHandler(7)}>7</button>
          <button onClick={() => numberClickHandler(8)}>8</button>
          <button onClick={() => numberClickHandler(9)}>9</button>
          <button>X</button>
        </div>
        <div className="row">
          <button onClick={() => numberClickHandler(4)}>4</button>
          <button onClick={() => numberClickHandler(5)}>5</button>
          <button onClick={() => numberClickHandler(6)}>6</button>
          <button>-</button>
        </div>
        <div className="row">
          <button onClick={() => numberClickHandler(1)}>1</button>
          <button onClick={() => numberClickHandler(2)}>2</button>
          <button onClick={() => numberClickHandler(3)}>3</button>
          <button>+</button>
        </div>
        <div className="row">
          <button onClick={toggleOnOff}>{isOn ? "Off" : "On"}</button>
          <button onClick={() => numberClickHandler(0)}>0</button>
          <button onClick={decimalClickHandler}>.</button>
          <button>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
