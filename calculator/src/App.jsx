import { useState } from 'react'
// import './App.css'
import './App.scss';
import AdvancedButtons from "./components/advanced-buttons/AdvancedButtons";
import NumericButtons from './components/numeric-buttons/NumericButtons';
import OperationButtons from './components/operation-buttons/OperationButtons';
import Results from "./components/results/Results";

function App() {
	const [result, setResult] = useState('');
	const [lastButton, setLastButton] = useState(null);

	const calculate = (value) => {
		setLastButton(value);
		value = value.toString();
		if (value === 'AC') {
			setResult('');
		} else if (value === '=') {
			setResult(preValue => eval(preValue));
		} else {
			// consolidate values of buttons pressed
			setResult(preValue => {
				// or in case of last button pressed was
				// the equal button, start with new value
				if (lastButton === '=') {
					return value;
				} else {
					return preValue + value;
				}
			});
		}
		return result;
	}

  return (
    <div className="App">
      <main className="calc-container">
        <Results result={result}/>
        <div className="calc-btns-container">
          <AdvancedButtons resultHandler={value => calculate(value)} />
          <OperationButtons resultHandler={value => calculate(value)} />
          <NumericButtons resultHandler={value => calculate(value)} />
        </div>
      </main>
    </div>
  )
}

export default App
