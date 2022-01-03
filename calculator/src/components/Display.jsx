import React from 'react';
import '../styles/display.css';

const Display = ({ result }) => {

	return (
		<div className="display">
			<span className="value">{result}</span>
		</div>
	);
}

export default Display;
