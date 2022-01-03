import React from 'react';
import Button from './Button';
import '../styles/controls.css';

const Controls = ({ data }) => {

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

export default Controls;
