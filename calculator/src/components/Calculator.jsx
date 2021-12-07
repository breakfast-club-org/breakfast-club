import React from 'react'
import AppControls from './Controls'
import Result from './Result'
import Numbers from './Numbers'
import MathSymbols from './MathSymbols'
import '../styles/calculator.css'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="calculator">
        <AppControls />
        <Result />
        <div className="buttons">
          <Numbers />
          <MathSymbols />
        </div>
      </div>
    );
  }
}

export default Calculator
