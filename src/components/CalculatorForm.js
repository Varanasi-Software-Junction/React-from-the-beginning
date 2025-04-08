// NameForm.js
import { useState } from "react";


function CalculatorForm() {


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Firm Submitted");
    setSum(x * 1 + y * 1);
  }
  const [
    cmd, setCMD] = useState(0);
  const [
    x, setX] = useState(0);


  const [
    y, setY] = useState(0);
  const [
    sum, setSum] = useState(0);

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
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add {sum}</h2>
      <label>N1 <input type="number" value={x} onChange={OneChange} ></input></label>
      <label>N2 <input type="number" value={y} onChange={TwoChange} ></input></label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default CalculatorForm;
