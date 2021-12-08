import React from 'react'
import ButtonsGroup from './ButtonsGroup'
import controls from '../data/controls.json'
import '../styles/controls.css'

class Controls extends React.Component {
  constructor(props) {
    super(props)
  }

 render() {
  return (
    <div className="controls">
      <ButtonsGroup data={controls} />
    </div>
  );
 }
}

export default Controls
