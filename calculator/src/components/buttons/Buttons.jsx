import React from 'react';

function Buttons (props) {
	return (
		<div className="buttons">
			{props.children}
		</div>
	)
}

export default Buttons;