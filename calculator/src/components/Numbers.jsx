import React from 'react'
import Button from './Button'
import '../styles/numbers.css'

class Numbers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="numbers">
        <Button value="AC" className="button-dark-gray" />
        <Button value="+/-" className="button-dark-gray" />
        <Button value="%" className="button-dark-gray" />
        <Button value="7" className="button-gray button-number" />
        <Button value="8" className="button-gray button-number" />
        <Button value="9" className="button-gray button-number" />
        <Button value="4" className="button-gray button-number" />
        <Button value="5" className="button-gray button-number" />
        <Button value="6" className="button-gray button-number" />
        <Button value="1" className="button-gray button-number" />
        <Button value="2" className="button-gray button-number" />
        <Button value="3" className="button-gray button-number" />
        <Button value="0" className="button-gray button-number button-double" />
        <Button value="." />
      </div>
    );
  }
}

export default Numbers
