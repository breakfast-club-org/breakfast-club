import React from 'react';
import '../styles/button.css';

export default function Button({ value, operator, buttonType, className, handleClick, allClear }) {
	return (
		<button
			type="button"
			data-button-type={buttonType}
			data-value={value}
			data-operator={operator}
			className={`button ` + className}
			onClick={handleClick}
		>
			{buttonType === 'all-clear' ? allClear : value}
		</button>
	);
}
