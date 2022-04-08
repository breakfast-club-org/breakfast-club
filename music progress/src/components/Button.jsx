import React from "react";

function Button(props) {
	return (
		<button onClick={props.onClick}>
			<i className={`fa-solid fa-${props.type}`}></i>
		</button>
	)
}

export default Button;