import React from 'react';
import Button from './Button';
import '../styles/controls.css';

export default function Controls({ data }) {
	return (
		<div className="controls">
			{data.map((button, i) => {
					return (
						<Button
							key={i}
							value={button.value}
							className={button.className}
						/>
					);
				})}
		</div>
	);
}
