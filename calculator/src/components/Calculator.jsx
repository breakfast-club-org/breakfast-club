import React from 'react'
import Controls from './Controls'
import Result from './Result'
import Numbers from './Numbers'
import Math from './Math'
import Scientific from './Scientific'

import controls from '../data/controls.json'
import numbers from '../data/numbers.json'
import math from '../data/math.json'
import scientific from '../data/scientific.json'

import '../styles/calculator.css'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="calculator">
        <Controls data={controls} />
        <Result />
        <div className="buttons">
          <Scientific data={scientific} />
          <Numbers data={numbers}/>
          <Math data={math} />
        </div>
      </div>
    );
  }
}

export default Calculator
