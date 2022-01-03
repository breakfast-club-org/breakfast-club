import React from 'react';
import Button from './Button';
import '../styles/math.css';

const Math = ({ data, handleClick }) => {

	return (
		<div className="math">
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

export default Math;
