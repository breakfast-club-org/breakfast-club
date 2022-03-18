import React, {useState} from 'react';
import Result from '../result/Result';
import Buttons from '../buttons/Buttons';
import Button from '../button/Button';

let hasDecimal = false;
const operators = {
	'divide' : '/',
	'multiply': '*',
	'add': '+',
	'subtract': '-'
};

function Calculator() {
	const [equation, setEquation] = useState([]);
	const [result, setResult] = useState('');
	const [input, setInput] = useState('');
	const [operands, setOperands] = useState([]);

	const clear = () => {
		setInput('');
		setOperands([])
	}

	const equals = () => {
		// Take input and add it to array
		let inputVal = input;
		setOperands([...operands, inputVal]);
		// Eval array
	}

	const operation = (type) => {
		console.log(type)
		let operandItem = input;
		let operator = type;
		setOperands([...operands, operandItem, operator]);
		setInput('');
	}

	const handleClick = (value, type) => {
		if (type === 'number') {
			let inputVal = input + value;
			setInput(inputVal);
		}

		if (type === 'clear') {
			clear();
		}

		if (type === 'equals') {
			equals();
		}

		if (operators.hasOwnProperty(type)) {
			// Check that we have at least one value
			if (input.length > 0) {
				console.log('here')
				operation(type);
			}
		}

		if (type === 'zero') {
			console.log(result.length)
			if (result.length > 0) {
				let input = result + value;
				setResult(input);
			}
		}

		if (type === 'decimal') {
			//  Check if we have a decimal
			if (hasDecimal === false) {
				let input = equation + value;
				hasDecimal = true;
				setResult(input);
			}
		}
	}

	const renderButton = (value, type, className) => {
		return (
			<Button
				type={type}
				value={value}
				className={className}
				onClick={() => handleClick(value, type)}
			/>
		)
	}

	return (
		<div className="calculator">
			<div className="circles">
			<div className="circle-wrapper">
				<div className="red"></div>
				<div className="yellow"></div>
				<div className="green"></div>
			</div>
			</div>
			<Result value={input}/>
			<Buttons>
				{/* Row 1 */}
				{renderButton('c', 'clear', 'button btn-alt')}
				{renderButton('+/-', 'plus-neg', 'button btn-alt')}
				{renderButton('%', 'percent', 'button btn-alt')}
				{renderButton('÷', 'divide', 'button btn-orange')}

				{/* Row 2 */}
				{renderButton('7', 'number', 'button')}
				{renderButton('8', 'number', 'button')}
				{renderButton('9', 'number', 'button')}
				{renderButton('x', 'multiply', 'button btn-orange')}

				{/* Row 3 */}
				{renderButton('4', 'number', 'button')}
				{renderButton('5', 'number', 'button')}
				{renderButton('6', 'number', 'button')}
				{renderButton('-', 'subtract', 'button btn-orange')}

				{/* Row 4 */}
				{renderButton('1', 'number', 'button')}
				{renderButton('2', 'number', 'button')}
				{renderButton('3', 'number', 'button')}
				{renderButton('+', 'add', 'button btn-orange')}

				{/* Row 4 */}
				{renderButton('0', 'zero', 'button number zero')}
				{renderButton('.', 'decimal', 'button')}
				{renderButton('=', 'equals', 'button btn-orange equals')}
			</Buttons>
		</div>
	)
}

export default Calculator;