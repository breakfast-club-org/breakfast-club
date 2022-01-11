import React from 'react';
import '../styles/button.css';

export default function Button({ value, buttonType, className, handleClick }) {
	return (
		<button
			type="button"
			data-button-type={buttonType}
			data-value={value}
			className={`button ` + className}
			onClick={handleClick}
		>
			{value}
		</button>
	);
}
