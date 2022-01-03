import React from 'react';
import ButtonsGroup from './ButtonsGroup';
import '../styles/scientific.css';
class Scientific extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="scientific">
				<ButtonsGroup {...this.props} />
			</div>
		);
	}
}

export default Scientific;
