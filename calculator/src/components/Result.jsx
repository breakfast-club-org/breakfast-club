import React from 'react';
import '../styles/result.css';

class Result extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="result">
				<p className="value">0</p>
			</div>
		);
	}
}

export default Result;
