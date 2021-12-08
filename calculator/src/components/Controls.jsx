import React from 'react'
import Button from './Button'
import '../styles/controls.css'

class Controls extends React.Component {
  constructor(props) {
    super(props)
  }

 render() {
  return (
    <div className="controls">
      <Button value="×" className="button-close" hideValue="true" />
      <Button value="-" className="button-minimize" hideValue="true" />
      <Button value="+" className="button-expand" hideValue="true" />
    </div>
  );
 }
}

export default Controls
