// import NameForm from './components/SimpleForm';

import './App.css';

import CalculatorFormWithRadio from './components/CalculatorFormWithRadio';
import CalculatorFormWithSelect from './components/CalculatorFormWithSelect';
import CalculatorFormWithCheckBox from './components/CalculatorFormWithCheckBox';
function App() {
  return (
    <div className="App">
      <br></br>
      <CalculatorFormWithRadio></CalculatorFormWithRadio>
      <br></br>
      <CalculatorFormWithSelect></CalculatorFormWithSelect>
      <br></br>
      <CalculatorFormWithCheckBox></CalculatorFormWithCheckBox>
      <br></br>
    </div>
  );
}

export default App;
