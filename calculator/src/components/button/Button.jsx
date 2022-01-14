
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

	// styles the current Operation Button with a dark border
	function isActiveStyle(activeClass) {
		if (activeClass) {
			return ' is-active';
		} else {
			return '';
		}
	}

  return (
		<button
			className={`${getButtonClasses(props.btn)}${isPressed}${isActiveStyle(props.isActive)}`}
			onClick={() => props.resultHandler(props.btn.value)}
			onMouseDown={onMouseDownHandler}
			onMouseUp={onMouseUpHandler}
			dangerouslySetInnerHTML={props.btn.markup ? createMarkup(props.btn.markup) : createMarkup(props.btn.value)}>
		</button>
	)
}

export default Button
