// NameForm.js
import { useState } from "react";


function CalculatorFormWithSelect() {


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    if (option == "add") {
      setResult(x * 1 + y * 1);
      return;
    }


    if (option == "sub") {
      setResult(x * 1 - y * 1);
      return;
    }
    setResult("No option selected");
  }

  const [
    x, setX] = useState(0);


  const [
    y, setY] = useState(0);
  const [
    sum, setResult] = useState(0);


  const [
    option, setOption] = useState('');

  const OneChange = (event) => {
    console.log("One");
    let t = event.target.value;
    setX(t);
  }
  const TwoChange = (event) => {
    console.log("Two");
    let t = event.target.value;
    setY(t);
  }
  const optionoChange = (event) => {
    console.log("Two");
    let t = event.target.value;
    console.log(t);
    setOption(t);

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Result {sum}</h2>
      <label>N1 <input type="number" value={x} onChange={OneChange} ></input></label>
      <label>N2 <input type="number" value={y} onChange={TwoChange} ></input></label>
      <select onChange={optionoChange}>
        <option value="">Please select a value</option>
        <option value="add">Add</option>
        <option value="sub">Sub</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}
export default CalculatorFormWithSelect;
