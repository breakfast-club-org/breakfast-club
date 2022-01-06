import React, { useEffect, useRef } from 'react';
import '../styles/display.css';

export default function Display({ result }) {
	const display = useRef(null);
	const value = useRef(null);

	useEffect(() => {
		if (value.current.offsetWidth >= display.current.offsetWidth) {
			console.log('text is overflowing');
		}
	});

	return (
		<div ref={display} className="display">
			<span ref={value} className="value">{result}</span>
		</div>
	);
}
