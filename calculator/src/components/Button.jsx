import React from 'react';
import '../styles/button.css';

export default function Button({ value, className, handleClick }) {
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
