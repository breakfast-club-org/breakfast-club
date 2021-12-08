import React from 'react'
import ButtonsGroup from './ButtonsGroup'
import math from '../data/math.json'
import '../styles/math.css'

class Math extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="math">
        <ButtonsGroup data={math} />
      </div>
    );
  }
}

export default Math
