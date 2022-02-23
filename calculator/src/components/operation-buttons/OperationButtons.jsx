
import Button from "../button/Button";

function OperationButtons(props) {
  return (
		<section className="operation-btns-container">
			<div className="operation-btns">
				{props.btn.map((btn, idx) => (
					<Button
						key={idx}
						btn={btn}
						isActive={props.isActive[idx].isActive}
						clickHandler={props.clickHandler}
					/>
				))}
			</div>
		</section>
	)
}

export default OperationButtons
