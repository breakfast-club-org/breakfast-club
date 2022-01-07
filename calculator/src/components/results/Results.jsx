
// import { useState } from 'react'

function Results(props) {

	return (
		<div className="results-container">
			<div className="results">{props.result || 0}</div>
		</div>
	)
}

export default Results
