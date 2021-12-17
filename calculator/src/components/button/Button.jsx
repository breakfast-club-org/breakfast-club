
import { useState } from 'react'

function Button(props) {
	const [isPressed, setIsPressed] = useState('');

	const onMouseDownHandler = () => {
		setIsPressed(' is-pressed');
	}

	const onMouseUpHandler = () => {
		setIsPressed('');
	}

	function createMarkup(value) {
		return {__html: value};
	}

	const getButtonClasses = (btn) => {
		let buttonClasses = `btn ${btn.type}-btn`;
		btn.isTwoCol ? buttonClasses += " two-col" : buttonClasses;
		btn.cornerType ? buttonClasses += ` ${btn.cornerType}` : buttonClasses;
		return buttonClasses;
	};
	
  return (
		<button 
			className={`${getButtonClasses(props.btn)}${isPressed}` }
			onClick={() => props.displayHandler(props.btn.value)}
			onMouseDown={onMouseDownHandler}
			onMouseUp={onMouseUpHandler}
			dangerouslySetInnerHTML={props.btn.markup ? createMarkup(props.btn.markup) : createMarkup(props.btn.value)}>
		</button>
	)
}

export default Button
