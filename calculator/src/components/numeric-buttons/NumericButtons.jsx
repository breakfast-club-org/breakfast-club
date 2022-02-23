
import Button from "../button/Button";

function NumericButtons(props) {
  return (
		<section className="numeric-btns-container">
			<div className="numeric-btns">
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

export default NumericButtons
