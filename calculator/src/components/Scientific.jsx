import React from 'react'
import Button from './Button'
import '../styles/scientific.css'

class Scientific extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="scientific">
        <Button value="(" className="button-dark-gray" />
        <Button value=")" className="button-dark-gray" />
        <Button value="mc" className="button-dark-gray" />
        <Button value="m+" className="button-dark-gray" />
        <Button value="m-" className="button-dark-gray" />
		<Button value="mr" className="button-dark-gray" />

		<Button value={["2", <sup>nd</sup>]} className="button-dark-gray" />
        <Button value={["x", <sup>2</sup>]} className="button-dark-gray" />
        <Button value={["x", <sup>3</sup>]} className="button-dark-gray" />
        <Button value={["x", <sup>y</sup>]} className="button-dark-gray" />
        <Button value={["e", <sup>x</sup>]} className="button-dark-gray" />
		<Button value={["10", <sup>x</sup>]} className="button-dark-gray" />

		<Button value={[<sup>1</sup>, "/", <sub>x</sub>]} className="button-dark-gray" />
        <Button value={[<sup>2</sup>, "√x"]} className="button-dark-gray" />
        <Button value={[<sup>3</sup>, "√x"]} className="button-dark-gray" />
        <Button value={[<sup>y</sup>, "√x"]} className="button-dark-gray" />
        <Button value="In" className="button-dark-gray" />
		<Button value={["log", <sub>10</sub>]} className="button-dark-gray" />

		<Button value="x!" className="button-dark-gray" />
        <Button value="sin" className="button-dark-gray" />
        <Button value="cos" className="button-dark-gray" />
        <Button value="tan" className="button-dark-gray" />
        <Button value="e" className="button-dark-gray" />
		<Button value="EE" className="button-dark-gray" />

		<Button value="Rad" className="button-dark-gray" />
        <Button value="sinh" className="button-dark-gray" />
        <Button value="cosh" className="button-dark-gray" />
        <Button value="tanh" className="button-dark-gray" />
        <Button value="π" className="button-dark-gray" />
		<Button value="Rand" className="button-dark-gray" />
      </div>
    );
  }
}

export default Scientific
