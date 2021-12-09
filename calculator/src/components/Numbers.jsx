import React from 'react';
import ButtonsGroup from './ButtonsGroup';
import '../styles/numbers.css';
class Numbers extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="numbers">
				<ButtonsGroup data={this.props.data} />
			</div>
		);
	}
}

export default Numbers;
