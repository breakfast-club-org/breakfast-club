import React from 'react'
import Controls from './Controls'
import Result from './Result'
import Numbers from './Numbers'
import MathSymbols from './MathSymbols'
import Scientific from './Scientific'
import '../styles/calculator.css'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="calculator">
        <Controls />
        <Result />
        <div className="buttons">
          <Scientific />
          <Numbers />
          <MathSymbols />
        </div>
      </div>
    );
  }
}

export default Calculator
