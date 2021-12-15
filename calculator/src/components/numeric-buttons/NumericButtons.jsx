
// import { useState } from 'react'

const numericData = [
  {
    value: 7,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 8,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 9,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 4,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 5,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 6,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 1,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 2,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 3,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 0,
    isTwoCol: true,
    cornerType: 'rounded-left-corner'
  },
  {
    value: '.',
    isTwoCol: false,
    cornerType: null
  },
];

function NumericButtons(props) {
	const numericButtons = numericData.map((btn, idx) => {
		// adding classes as needed
		let numericClass = "numeric-btn";
		btn.isTwoCol ? numericClass += " two-col" : numericClass;
		btn.cornerType ? numericClass += ` ${btn.cornerType}` : numericClass;
		return <button 
						className={numericClass} 
						key={idx} 
						onClick={() => props.displayHandler(btn.value)}>
							{btn.value}
					</button>
	});
	
  return (
		<section className="numeric-btns-container">
			<div className="numeric-btns">
				{numericButtons}
			</div>
		</section>
  )
}

export default NumericButtons
