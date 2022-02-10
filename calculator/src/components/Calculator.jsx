import React, { useState, useEffect, useRef } from 'react';
import Display from './Display';
import Controls from './Controls';
import Numbers from './Numbers';
import Aux from './Aux';
import Math from './Math';
import Scientific from './Scientific';

import controls from '../data/controls.json';
import numbers from '../data/numbers.json';
import aux from '../data/aux.json';
import math from '../data/math.json';
import scientific from '../data/scientific.json';

import '../styles/calculator.css';


export default function Calculator() {
	const [result, setResult] = useState(0);
	const [prevResult, setPrevResult] = useState(0);
	const [operator, setOperator] = useState(0);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isCalculatingReady, setIsCalculatingReady] = useState(false);
	const [allClear, setAllClear] = useState('AC');
	const calculator = useRef(null);

	// Toggle All Clear btn copy
	useEffect(() => {
		if (result !== 0) {
			setAllClear('C');
		} else {
			setAllClear('AC');
		}
	}, [result]);

	// reset state
	const reset = () => {
		setResult(0);
		setPrevResult(0);
		setOperator(0);
	}

	const handleControlClick = (e) => {
		const expandBtn = e.target.dataset.buttonType === 'expand';

		if (expandBtn) {
			calculator.current.classList.toggle('is-expanded');
			setIsExpanded(!isExpanded); // toggles state when clicked
		}
	}

	const handleAuxClick = (e) => {
		const allClearBtn = e.target.dataset.buttonType === 'all-clear';
		const positiveNegativeBtn = e.target.dataset.buttonType === 'positive-negative';
		const percentageBtn = e.target.dataset.buttonType === 'percentage';

		if (allClearBtn) {
			return reset();
		}

		if (positiveNegativeBtn) {
			let n = result * -1;
			return setResult(n);
		}

		if (percentageBtn) {
			let n = result / 100;
			return setResult(n);
		}
	}

	const handleNumberClick = (e) => {
		if (isCalculatingReady) {
			setResult(0);
			setIsCalculatingReady(false);
		}
		// combine result with prevState
		setResult(prevState => prevState !== 0 ? parseInt(prevState + e.target.dataset.value) : parseInt(e.target.dataset.value));
	}

	const handleMathClick = (e) => {
		const notEqualBtn = e.target.dataset.operator !== '=';

		if (notEqualBtn) {
			setPrevResult(result)
			setOperator(e.target.dataset.operator);
			setIsCalculatingReady(true);
		} else {
			let total = eval(prevResult + operator + result);
			setResult(total);
		}
	}

	return (
		<div ref={calculator} className="calculator">
			<Display result={result} />
			<div className="buttons">
				<Controls data={controls} handleClick={handleControlClick} />
				<Scientific data={scientific} />
				<Aux data={aux} handleClick={handleAuxClick} allClear={allClear} />
				<Numbers data={numbers} handleClick={handleNumberClick} />
				<Math data={math} handleClick={handleMathClick} />
			</div>
		</div>
	);
}