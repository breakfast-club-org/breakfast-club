import React from 'react';
import Button from './Button';
import '../styles/numbers.css';

export default function Numbers({ data, handleClick }) {
	return (
		<div className="numbers">
			{data.map((button, i) => {
					return (
						<Button
							key={i}
							value={button.value}
							className={button.className}
							handleClick={handleClick}
						/>
					);
				})}
		</div>
	);
}
