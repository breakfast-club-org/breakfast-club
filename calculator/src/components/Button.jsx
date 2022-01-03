import React from 'react';
import PropTypes from 'prop-types';
import '../styles/button.css';

class Button extends React.Component {
	constructor(props) {
		super(props);
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
				value={this.props.value}
				onClick={this.props.onClick}
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

Button.propTypes = {
	className: PropTypes.string,
	hideValue: PropTypes.bool,
	onClick: PropTypes.func,
	type: PropTypes.string,
	value: PropTypes.string.isRequired
  };

export default Button;
