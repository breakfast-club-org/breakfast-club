import React from 'react';
import Button from './Button';
import '../styles/controls.css';

export default function Controls(props) {
	return (
		<div className="controls">
			{props.data.map((button, i) => {
					return (
						<Button
							key={i}
							buttonType={button.buttonType}
							value={button.value}
							className={button.className}
							handleClick={props.handleClick}
						/>
					);
				})}
		</div>
	);
}
