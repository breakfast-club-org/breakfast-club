import React from 'react'
import Button from './Button'

class ButtonsGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
		<>
			{this.props.data.map((button, i) => {
				return (
					<Button
					key={i}
					value={button.value}
					className={button.className}
					/>
				)
			})}
		</>
    );
  }
}

export default ButtonsGroup
