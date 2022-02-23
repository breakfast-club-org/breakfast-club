
import Button from "../button/Button";

function AdvancedButtons(props) {
  return (
		<section className="advanced-btns-container">
			<div className="advanced-btns">
				{props.btn.map((btn, idx) => (
					<Button
						key={idx}
						btn={btn}
						clickHandler={props.clickHandler}
					/>
				))}
			</div>
		</section>
	)
}

export default AdvancedButtons
