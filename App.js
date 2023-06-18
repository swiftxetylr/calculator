import React from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "",
  });

  function handleNumber(value) {
    let newValue = value.toString();
    if (!calc.isInitial) {
      newValue = calc.current.toString() + value.toString();
    }
    setCalc({ ...calc, current: newValue, isInitial: false });
  }

  function handleOperator(value) {
    let total = calc.total;
    if (calc.preOp === "=") {
      total = doCalculation();
    } else {
      total = doCalculation().toString();
    }
    setCalc({
      current: total,
      total: total,
      isInitial: true,
      preOp: value,
    });
  }

  function renderDisplay() {
    return calc.current;
  }

  function doCalculation() {
    let total = parseInt(calc.total);
    let current = parseInt(calc.current);
    switch (calc.preOp) {
      case "+":
        total += current;
        break;
      case "-":
        total -= current;
        break;
      case "*":
        total *= current;
        break;
      case "/":
        total /= current;
        break;
      default:
        total = current;
    }
    return total;
  }

  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "",
    });
  }

  function CalcButton(props) {
    return (
      <button
        className={props.className}
        onClick={() => props.onClick(props.value)}>
        {props.value}
      </button>
    );
  }

  return (
    <div className="app-container">
      <div className="calculator">
        <div className="display">{renderDisplay()}</div>
        <CalcButton value="7" onClick={handleNumber} />
        <CalcButton value="8" onClick={handleNumber} />
        <CalcButton value="9" onClick={handleNumber} />
        <CalcButton className="operator" value="/" onClick={handleOperator} />

        <CalcButton value="4" onClick={handleNumber} />
        <CalcButton value="5" onClick={handleNumber} />
        <CalcButton value="6" onClick={handleNumber} />
        <CalcButton className="operator" value="*" onClick={handleOperator} />

        <CalcButton value="1" onClick={handleNumber} />
        <CalcButton value="2" onClick={handleNumber} />
        <CalcButton value="3" onClick={handleNumber} />
        <CalcButton className="operator" value="-" onClick={handleOperator} />

        <CalcButton value="C" onClick={handleClear} />
        <CalcButton value="0" onClick={handleNumber} />
        <CalcButton value="=" onClick={handleOperator} />
        <CalcButton className="operator" value="+" onClick={handleOperator} />
      </div>
    </div>
  );
}

export default App;
