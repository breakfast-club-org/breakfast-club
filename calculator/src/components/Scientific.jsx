import React from 'react'
import Button from './Button'
import '../styles/scientific.css'
import scientific from '../data/scientific.json'

class Scientific extends React.Component {
  constructor(props) {
    super(props)
  }

  createMarkup() {
    return {__html: 'First &middot; Second'};
  }

  render() {
    return (
      <div className="scientific">
        {scientific.map((button, i) => {
          return (
            <Button
              key={i}
              value={button.value}
              className={button.className}
              dangerouslySetInnerHTML={this.createMarkup()}
            />
          )
        })}
      </div>
    );
  }
}

export default Scientific
