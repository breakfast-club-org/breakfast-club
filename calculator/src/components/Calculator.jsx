import React, { useState } from 'react';
import Display from './Display';
import Controls from './Controls';
import Numbers from './Numbers';
import Math from './Math';
import Scientific from './Scientific';

import controls from '../data/controls.json';
import numbers from '../data/numbers.json';
import math from '../data/math.json';
import scientific from '../data/scientific.json';

import '../styles/calculator.css';


const Calculator = () => {
	const [result, setResult] = useState(0);

	const handleNumberClick = (e) => {
		setResult(e.target.innerHTML);
		console.log('you clicked a number');
	}

	const handleMathClick = (e) => {
		console.log('you clicked a math button');
	}

	return (
		<div className="calculator">
			<Display result={result} />
			<div className="buttons">
				<Controls data={controls} />
				<Scientific data={scientific} />
				<Numbers data={numbers} handleClick={handleNumberClick} />
				<Math data={math} handleClick={handleMathClick} />
			</div>
		</div>
	);
}

export default Calculator;