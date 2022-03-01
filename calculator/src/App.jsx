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
	const [isOperActive, setIsOperActive] = useState([
		{
			value: "/",
			isActive: false,
		},
		{
			value: "*",
			isActive: false,
		},
		{
			value: "-",
			isActive: false,
		},
		{
			value: "+",
			isActive: false,
		},
		{
			value: "=",
			isActive: false,
		}
	]);
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
		if (operations.includes(value)) {
			const updateIsOperActive = [...isOperActive];
			updateIsOperActive.map(btn => {
				if (btn.value === value) {
					btn.isActive = true;
				} else {
					btn.isActive = false;
				}
				setIsOperActive(updateIsOperActive);
			});
		}
	}

	function clearActiveOperatorClass() {
		const updateIsOperActive = [...isOperActive];
		updateIsOperActive.map(btn => {
			btn.isActive = false;
		});
		setIsOperActive(updateIsOperActive);
	}

	function resetAll() {
		setResult('');
		setDisplay('');
	}

	function calcTest() {
		// JS - Operator precedence
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
		console.log("Test: Order of operation: 12 + (3 * 4) = 24", 12 + (3 * 4));
		console.log("Test: by First appearance: (12 + 3) * 4 = 60", (12 + 3) * 4);
		console.log("Test: No paranthesis: 12 + 3 * 4 = ", 12 + 3 * 4);
	}

	function calcEval() {
		setResult(preValue => eval(preValue));
		let newResult = [...result];
		newResult = newResult.join('');
		newResult = eval(newResult);
		console.log('Buttons Pressed :', result);
		console.log('CalcEval: ', newResult);
		setDisplay(newResult);
	}

	function splitNums(operator) {
		let numbers = result.split(operator);
		let nums = {};
		nums.first = parseInt(numbers[0]);
		nums.second = parseInt(numbers[1]);
		// console.log('Inputs for CalcLongHand: ', nums);
		return nums;
	}

	// so far only works with 2 inputs
	function calcLongHand() {
		let updateResult = result;
		if (updateResult.includes("*")) {
			let nums = splitNums("*");
			updateResult = nums.first * nums.second;
		} else if (updateResult.includes("/")) {
			let nums = splitNums("/");
			updateResult = nums.first / nums.second;
		} else if (updateResult.includes("+")) {
			let nums = splitNums("+");
			updateResult = nums.first + nums.second;
		} else if (updateResult.includes("-")) {
			let nums = splitNums("-");
			updateResult = nums.first - nums.second;
		}
		console.log('CalcLongHand (only works with 2 inputs): ', updateResult);
		console.log('============================');
		// setDisplay(updateResult);
	}


	// ================================
	// CLICK HANDLERS
	// ================================

	const advClickHandler = (e) => {
		let value = e.target.value;
		setLastButton(value);
		// AC button (AC || C)
		if (value === 'AC') {
			resetAll();
			clearActiveOperatorClass();
			// Percentage button (%)
		} else if (value === '%') {
			setResult(preValue => preValue * .01);
			setDisplay(preValue => preValue * .01);
			// Plus/minus button (+/-)
		} else if (value === '+/-') {
			setResult(preValue => preValue * -1);
			setDisplay(preValue => preValue * -1);
		} 
	}

	const operClickHandler = (e) => {
		let value = e.target.value;
		setLastButton(value);
		// Equal (=)
		if (value === '=') {
			calcTest();
			calcEval();
			calcLongHand();
			clearActiveOperatorClass();
		} else {
			// Operators (+, - , *, /)
			setResult(preValue => preValue + value);
			setActiveOperatorClass(value);
		}
	}

	const numClickHandler = (e) => {
		const operations = '/*-+';
		let value = e.target.value;
		setLastButton(value);
		// if last button pressed was (=)
		if (lastButton === '=') {
			setDisplay(value);
			setResult(value);
		// if last button pressed was (+, - , *, /)
		} else if (operations.includes(lastButton)) {
			setDisplay(value);
			setResult(preValue => preValue + value);
			// if last button pressed was a number
		} else {
			setDisplay(preValue => preValue + value);
			setResult(preValue => preValue + value);
		}
	}


  return (
    <div className="App">
      <main className="calc-container">
        {/* <Results result={result}/> */}
        <Results result={display}/>
        <div className="calc-btns-container">
          <AdvancedButtons btn={AdvancedData} clickHandler={advClickHandler} allClear={allClear}/>
          <OperationButtons btn={OperationData} clickHandler={operClickHandler} isActive={isOperActive}/>
          <NumericButtons btn={NumericData} clickHandler={numClickHandler}/>
        </div>
      </main>
    </div>
  )
}

export default App
