import React from 'react'
import ButtonsGroup from './ButtonsGroup'
import '../styles/scientific.css'
class Scientific extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="scientific">
        <ButtonsGroup data={this.props.data} />
      </div>
    );
  }
}

export default Scientific
