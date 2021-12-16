
import Button from "../button/Button";

const numericData = [
  {
		type: 'numeric',
    value: 7,
    isTwoCol: false,
    cornerType: null
  },
  {
		type: 'numeric',
    value: 8,
    isTwoCol: false,
    cornerType: null
  },
  {
		type: 'numeric',
    value: 9,
    isTwoCol: false,
    cornerType: null
  },
  {
		type: 'numeric',
    value: 4,
    isTwoCol: false,
    cornerType: null
  },
  {
		type: 'numeric',
    value: 5,
    isTwoCol: false,
    cornerType: null
  },
  {
		type: 'numeric',
    value: 6,
    isTwoCol: false,
    cornerType: null
  },
  {
		type: 'numeric',
    value: 1,
    isTwoCol: false,
    cornerType: null
  },
  {
		type: 'numeric',
    value: 2,
    isTwoCol: false,
    cornerType: null
  },
  {
		type: 'numeric',
    value: 3,
    isTwoCol: false,
    cornerType: null
  },
  {
		type: 'numeric',
    value: 0,
    isTwoCol: true,
    cornerType: 'rounded-left-corner'
  },
  {
		type: 'numeric',
    value: '.',
    isTwoCol: false,
    cornerType: null
  },
];

function NumericButtons(props) {
  return (
		<section className="numeric-btns-container">
			<div className="numeric-btns">
				{numericData.map((btn, idx) => (
					<Button
						key={idx}
						btn={btn}
						displayHandler={props.displayHandler}
					/>
				))}
			</div>
		</section>
  )
}

export default NumericButtons
