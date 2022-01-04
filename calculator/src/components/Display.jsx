import React from 'react';
import '../styles/display.css';

export default function Display({ result }) {
	return (
		<div className="display">
			<span className="value">{result}</span>
		</div>
	);
}
