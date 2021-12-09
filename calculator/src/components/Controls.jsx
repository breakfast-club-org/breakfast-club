import React from 'react';
import ButtonsGroup from './ButtonsGroup';
import '../styles/controls.css';

class Controls extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="controls">
				<ButtonsGroup data={this.props.data} />
			</div>
		);
	}
}

export default Controls;
