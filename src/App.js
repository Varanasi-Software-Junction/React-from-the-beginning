// import NameForm from './components/SimpleForm';

import './App.css';

import CalculatorFormWithRadio  from './components/CalculatorFormWithRadio';
import CalculatorFormWithSelect from './components/CalculatorFormWithSelect';
import CalculatorFormWithCheckBox from './components/CalculatorFormWithCheckBox';
function App() {
  return (
    <div className="App">
       
<CalculatorFormWithRadio></CalculatorFormWithRadio>
<CalculatorFormWithSelect></CalculatorFormWithSelect>
<CalculatorFormWithCheckBox></CalculatorFormWithCheckBox>
    </div>
  );
}

export default App;
