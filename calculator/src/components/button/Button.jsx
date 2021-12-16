
// import { useState } from 'react'

function Button(props) {
	const getNumericClass = (btn) => {
		let numericClass = "btn numeric-btn";
		btn.isTwoCol ? numericClass += " two-col" : numericClass;
		btn.cornerType ? numericClass += ` ${btn.cornerType}` : numericClass;
		return numericClass;
	};
	
  return (
		<button 
			className={`${getNumericClass(props.btn)}` } 
			onClick={() => props.displayHandler(props.btn.value)}>
				{props.btn.value}
		</button>
	)
}

export default Button
