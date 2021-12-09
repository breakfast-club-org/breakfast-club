import React from 'react'
import ButtonsGroup from './ButtonsGroup'
import '../styles/math.css'

class Math extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="math">
        <ButtonsGroup data={this.props.data} />
      </div>
    );
  }
}

export default Math
