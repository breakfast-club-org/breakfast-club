
import Button from "../button/Button";

const advancedData = [
	{
		type: 'advanced',
		value: 'AC',
	},
	{
		type: 'advanced',
		value: '+/-',
	},
	{
		type: 'advanced',
		value: '%',
	},
];

function AdvancedButtons(props) {
  return (
		<section className="advanced-btns-container">
			<div className="advanced-btns">
				{advancedData.map((btn, idx) => (
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

export default AdvancedButtons
