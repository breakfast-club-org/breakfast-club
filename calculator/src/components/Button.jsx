import React from 'react';
import '../styles/button.css';

const Button = ({ value, className, handleClick }) => {
	return (
		<button
			type="button"
			className={`button ` + className}
			onClick={handleClick}
		>
			{value}
		</button>
	);
}

export default Button;
