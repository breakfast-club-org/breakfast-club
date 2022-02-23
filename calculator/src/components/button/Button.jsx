
import { useState } from 'react'

function Button(props) {
	const [isPressed, setIsPressed] = useState('');

	const onMouseDownHandler = () => {
		setIsPressed(' is-pressed');
	}

	const onMouseUpHandler = () => {
		setIsPressed('');
	}

	function createMarkup(value, ac) {
		value = checkAllClear(value, ac);
		return {__html: value};
	}

	function checkAllClear(value, ac) {
		if (value === "AC" && ac) {
			return ac;
		}
		return value
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
			onClick={props.clickHandler}
			onMouseDown={onMouseDownHandler}
			onMouseUp={onMouseUpHandler}
			value={props.btn.value}
			dangerouslySetInnerHTML={props.btn.markup ? createMarkup(props.btn.markup) : createMarkup(props.btn.value, props.allClear)}>
		</button>
	)
}

export default Button
