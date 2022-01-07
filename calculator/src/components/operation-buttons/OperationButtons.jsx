
import Button from "../button/Button";

const operationData = [
	{
		type: 'operation',
		value: '÷',
		markup: '÷',
		cornerType: null
	},
	{
		type: 'operation',
		value: '×',
		markup: '×',
		cornerType: null
	},
	{
		type: 'operation',
		value: '-',
		markup: '&minus;',
		cornerType: null
	},
	{
		type: 'operation',
		value: '+',
		markup: '&plus;',
		cornerType: null
	},
	{
		type: 'operation',
		value: '=',
		markup: '=',
		cornerType: 'rounded-right-corner'
	},
];

function OperationButtons(props) {
  return (
		<section className="operation-btns-container">
			<div className="operation-btns">
				{operationData.map((btn, idx) => (
					<Button
						key={idx}
						btn={btn}
						resultHandler={props.resultHandler}
					/>
				))}
			</div>
		</section>
	)
}

export default OperationButtons
