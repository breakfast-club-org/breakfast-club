import React from 'react'
import ButtonsGroup from './ButtonsGroup'
import scientific from '../data/scientific.json'
import '../styles/scientific.css'
class Scientific extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="scientific">
        <ButtonsGroup data={scientific} />
      </div>
    );
  }
}

export default Scientific
