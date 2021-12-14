
// import { useState } from 'react'

const advancedData = [
	{
		value: 'AC',
	},
	{
		value: '+/-',
	},
	{
		value: '%',
	},
];

function AdvancedButtons() {
	const advancedButtons = advancedData.map((btn, idx) => {
		let advancedClass = "advanced-btn";
		return <button key={idx} className={advancedClass}>{btn.value}</button>
	});
	
  return (
		<section className="advanced-btns-container">
			<div className="advanced-btns">
				{advancedButtons}
			</div>
		</section>
	)
}

export default AdvancedButtons
