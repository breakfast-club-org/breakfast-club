import React from 'react';
import '../styles/button.css';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	onClick(e) {
		const calculator = document.querySelector('.calculator');
		const btnExpand = e.target.classList.contains('button-expand');

		if (btnExpand) {
			calculator.classList.toggle('is-expanded');
		}
	}

	render() {
		return (
			<button
				className={
					this.props.className
						? `button ` + this.props.className
						: `button button-gray`
				}
				type={this.props.type ? this.props.type : `button`}
				onClick={this.onClick}
			>
				{this.props.hideValue ? (
					<span className="is-hidden">{this.props.value}</span>
				) : (
					this.props.value
				)}
			</button>
		);
	}
}

export default Button;
