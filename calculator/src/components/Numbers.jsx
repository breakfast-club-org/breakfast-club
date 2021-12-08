import React from 'react'
import Button from './Button'
import '../styles/numbers.css'
import numbers from '../data/numbers.json'

class Numbers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="numbers">
        {numbers.map((button, i) => {
          return (
            <Button
              key={i}
              value={button.value}
              className={button.className}
            />
          )
        })}
      </div>
    );
  }
}

export default Numbers
