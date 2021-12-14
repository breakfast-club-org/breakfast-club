
// import { useState } from 'react'

const operationData = [
	{
		value: '&divide;',
		cornerType: null
	},
	{
		value: '&times;',
		cornerType: null
	},
	{
		value: '&minus;',
		cornerType: null
	},
	{
		value: '&plus;',
		cornerType: null
	},
	{
		value: '=',
		cornerType: 'rounded-right-corner'
	},
];

function OperationButtons() {
	function createMarkup(value) {
		return {__html: value};
	}

	const operationButtons = operationData.map((btn, idx) => {
		let operationClass = "operation-btn";
		btn.cornerType ? operationClass += ` ${btn.cornerType}` : operationClass;
		return <button key={idx} 
								className={operationClass} 
								dangerouslySetInnerHTML={createMarkup(btn.value)}></button>
	});
	
  return (
		<section className="operation-btns-container">
			<div className="operation-btns">
				{operationButtons}
			</div>
		</section>
	)
}

export default OperationButtons
