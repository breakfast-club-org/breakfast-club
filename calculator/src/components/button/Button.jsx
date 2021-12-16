
import { useState } from 'react'

function Button(props) {
	const [pressed, setPressed] = useState('');

	const onMouseDownHandler = () => {
		setPressed(' pressed');
	}
	
	const onMouseUpHandler = () => {
		setPressed('');
	}

	const getButtonClasses = (btn) => {
		let buttonClasses = "btn numeric-btn";
		btn.isTwoCol ? buttonClasses += " two-col" : buttonClasses;
		btn.cornerType ? buttonClasses += ` ${btn.cornerType}` : buttonClasses;
		return buttonClasses;
	};
	
  return (
		<button 
			className={`${getButtonClasses(props.btn)}${pressed}` }
			onClick={() => props.displayHandler(props.btn.value)}
			onMouseDown={onMouseDownHandler}
			onMouseUp={onMouseUpHandler}>
				{props.btn.value}
		</button>
	)
}

export default Button
