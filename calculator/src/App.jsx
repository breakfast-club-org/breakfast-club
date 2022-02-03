import { useState } from 'react'
// import './App.css'
import './App.scss';
import AdvancedButtons from "./components/advanced-buttons/AdvancedButtons";
import NumericButtons from './components/numeric-buttons/NumericButtons';
import OperationButtons from './components/operation-buttons/OperationButtons';
import Results from "./components/results/Results";

import AdvancedData from "./components/advanced-buttons/AdvancedData.json";
import NumericData from "./components/numeric-buttons/NumericData.json";
import OperationData from './components/operation-buttons/OperationData.json';

function App() {
	const [display, setDisplay] = useState('');
	const [result, setResult] = useState('');
	const [lastButton, setLastButton] = useState(null);
	const [isActive, setIsActive] = useState(OperationData);

	function setActiveOperatorClass(value) {
		const operations = '/*-+';
		const updateIsActive = [...isActive];
		if (operations.includes(value)) {
			updateIsActive.map(btn => {
				if (btn.value === value) {
					btn.isActive = true;
				} else {
					btn.isActive = false;
				}
				setIsActive(updateIsActive);
			});
		}
	}

	function clearActiveOperatorClass() {
		const updateIsActive = [...isActive];
		updateIsActive.map(btn => {
			btn.isActive = false;
		});
		setIsActive(updateIsActive);
	}

	const calculate = (value) => {
		const operations = '/*-+';
		value = value.toString();
		setLastButton(value);
		setActiveOperatorClass(value);
		if (value === 'AC') {
			setResult('');
			setDisplay('');
			clearActiveOperatorClass();
		} else if (value === '=') {
			setResult(preValue => eval(preValue));
			let newResult = [...result];
			newResult = newResult.join('');
			newResult = eval(newResult);
			setDisplay(eval(newResult));
			clearActiveOperatorClass();
		} else if (operations.includes(value)) {
			setResult(preValue => preValue + value);
		} else {
			setResult(preValue => {
				// or in case of last button pressed was
				// the equal button, start with new value
				if (lastButton === '=') {
					setDisplay(value);
					return value;
				} else if (operations.includes(lastButton)) {
					setDisplay(value);
					return preValue + value;
					// consolidate values of buttons pressed
				} else {
					setDisplay(preValue => preValue + value);
					return preValue + value;
				}
			});
		}
		return result;
	}

  return (
    <div className="App">
      <main className="calc-container">
        {/* <Results result={result}/> */}
        <Results result={display}/>
        <div className="calc-btns-container">
          <AdvancedButtons btn={AdvancedData} resultHandler={value => calculate(value)}/>
          <OperationButtons btn={OperationData} resultHandler={value => calculate(value)} isActive={isActive}/>
          <NumericButtons btn={NumericData} resultHandler={value => calculate(value)}/>
        </div>
      </main>
    </div>
  )
}

export default App