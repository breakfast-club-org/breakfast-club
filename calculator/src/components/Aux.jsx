import React from 'react';
import Button from './Button';
import '../styles/aux.css';

export default function Aux({ data, handleClick }) {
	return (
		<div className="aux">
			{data.map((button, i) => {
					return (
						<Button
							key={i}
							buttonType={button.buttonType}
							value={button.value}
							className={button.className}
							handleClick={handleClick}
						/>
					);
				})}
		</div>
	);
}
