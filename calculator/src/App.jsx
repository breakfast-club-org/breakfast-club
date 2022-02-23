import { useEffect, useState } from 'react'
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
	const [allClear, setAllClear] = useState('AC');

	// update AC button
	useEffect(() => {
		if (result === '') {
			setAllClear('AC');
		} else {
			setAllClear('C');
		}
	}, [result]);

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

	const advClickHandler = (e) => {
		let value = e.target.value;
		setLastButton(value);
		// AC button
		if (value === 'AC') {
			setResult('');
			setDisplay('');
			clearActiveOperatorClass();
			// Percentage button
		} else if (value === '%') {
			setResult(preValue => preValue * .01);
			setDisplay(preValue => preValue * .01);
			// Plus/minus button
		} else if (value === '+/-') {
			setResult(preValue => preValue * -1);
			setDisplay(preValue => preValue * -1);
		} 
	}

	const clickHandler = (e) => {
		const operations = '/*-+';
		let value = e.target.value;
		value = value.toString();
		setLastButton(value);
		setActiveOperatorClass(value);
		// Equal button (=)
		if (value === '=') {
			setResult(preValue => eval(preValue));
			let newResult = [...result];
			newResult = newResult.join('');
			newResult = eval(newResult);
			setDisplay(eval(newResult));
			clearActiveOperatorClass();
		// Operation button (/, *, -, +)
		} else if (operations.includes(value)) {
			setResult(preValue => preValue + value);
		} else {
			// Digits button (1,2,3,4,5,6,7,8,9,0,.)
			setResult(preValue => {
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
          <AdvancedButtons btn={AdvancedData} clickHandler={advClickHandler} allClear={allClear}/>
          <OperationButtons btn={OperationData} clickHandler={clickHandler} isActive={isActive}/>
          <NumericButtons btn={NumericData} clickHandler={clickHandler}/>
        </div>
      </main>
    </div>
  )
}

export default App
