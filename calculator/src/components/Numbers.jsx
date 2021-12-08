import React from 'react'
import ButtonsGroup from './ButtonsGroup'
import numbers from '../data/numbers.json'
import '../styles/numbers.css'
class Numbers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="numbers">
        <ButtonsGroup data={numbers} />
      </div>
    );
  }
}

export default Numbers
