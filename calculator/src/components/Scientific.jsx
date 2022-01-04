import React from 'react';
import Button from './Button';
import '../styles/scientific.css';

export default function Scientific({ data, handleClick }) {
	return (
		<div className="scientific">
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
