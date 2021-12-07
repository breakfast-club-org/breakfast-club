import React from 'react'
import Button from './Button'
import '../styles/math-symbols.css'

class MathSymbols extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="math-symbols">
        <Button value="÷" className="button-orange" />
        <Button value="×" className="button-orange" />
        <Button value="-" className="button-orange" />
        <Button value="+" className="button-orange" />
        <Button value="=" className="button-orange" />
      </div>
    );
  }
}

export default MathSymbols
