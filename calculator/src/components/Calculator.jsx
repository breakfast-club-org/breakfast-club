import React from 'react';
import Controls from './Controls';
import Result from './Result';
import Numbers from './Numbers';
import Math from './Math';
import Scientific from './Scientific';

import controls from '../data/controls.json';
import numbers from '../data/numbers.json';
import math from '../data/math.json';
import scientific from '../data/scientific.json';

import '../styles/calculator.css';

class Calculator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			result: [0]
		};

		this.onNumberClick = this.onNumberClick.bind(this);
		this.clearResult = this.clearResult.bind(this);
	}

	onNumberClick(e) {
		const calculator = document.querySelector('.calculator');
		const btnExpand = e.target.classList.contains('button-expand');
		const btnAllClear = e.target.classList.contains('button-all-clear');
		const btnNumber = e.target.classList.contains('button-number');

		if (btnAllClear) {
			this.clearResult();
		}

		if (btnNumber) {
			const result = this.state.result.concat(parseInt(e.target.value));

			if (result[0] === 0) {
				result.shift();
			}

			this.setState({
				result: result
			})
		}

		if (btnExpand) {
			calculator.classList.toggle('is-expanded');
		}
	}

	onMatchClick(e) {}

	onScientificClick(e) {}

	clearResult() {
		this.setState({
			result: [0]
		})
	}

	render() {
		return (
			<div className="calculator">
				<Result {...this.state} />
				<div className="buttons">
					<Controls data={controls} />
					<Scientific data={scientific} {...this.state} onClick={this.onScientificClick} />
					<Numbers data={numbers} {...this.state} onClick={this.onNumberClick} />
					<Math data={math} {...this.state} onClick={this.onMatchClick} />
				</div>
			</div>
		);
	}
}

export default Calculator;
