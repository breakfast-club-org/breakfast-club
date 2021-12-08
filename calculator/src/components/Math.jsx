import React from 'react'
import Button from './Button'
import '../styles/math.css'
import math from '../data/math.json'

class Math extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="math">
        {math.map((button, i) => {
          return (
            <Button
              key={i}
              value={button.value}
              className={button.className}
              hideValue={button.hideValue}
            />
          )
        })}
      </div>
    );
  }
}

export default Math
