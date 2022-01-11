import React, { useState, useRef } from 'react';
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
	const calculator = useRef(null);

	const handleControlClick = (e) => {
		if (e.target.classList.contains('button-expand')) {
			calculator.current.classList.toggle('is-expanded');
		}
	}

	const handleAuxclick = (e) => {
		if (e.target.classList.contains('button-all-clear')) {
			return setResult(0);
		}

		if (e.target.classList.contains('button-positive-negative')) {
			let n = result * -1;
			return setResult(n);
		}

		if (e.target.classList.contains('button-percentage')) {
			let n = result / 100;
			return setResult(n);
		}
	}

	const handleNumberClick = (e) => {
		// combine result with prevState
		setResult(prevState => prevState !== 0 ? prevState + e.target.innerHTML : e.target.innerHTML);
	}

	const handleMathClick = (e) => {
		console.log('you clicked a math button');
		console.log('result', result);
	}

	return (
		<div ref={calculator} className="calculator">
			<Display result={result} />
			<div className="buttons">
				<Controls data={controls} handleClick={handleControlClick} />
				<Scientific data={scientific} />
				<Aux data={aux} handleClick={handleAuxclick} />
				<Numbers data={numbers} handleClick={handleNumberClick} />
				<Math data={math} handleClick={handleMathClick} />
			</div>
		</div>
	);
}