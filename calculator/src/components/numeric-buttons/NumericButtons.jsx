
import Button from "../button/Button";

const numericData = [
  {
    value: 7,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 8,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 9,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 4,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 5,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 6,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 1,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 2,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 3,
    isTwoCol: false,
    cornerType: null
  },
  {
    value: 0,
    isTwoCol: true,
    cornerType: 'rounded-left-corner'
  },
  {
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
