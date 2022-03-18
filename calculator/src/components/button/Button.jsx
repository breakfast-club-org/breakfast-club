function Button(props) {
	return (
		<div className={props.className} type={props.type} onClick={props.onClick}>
			{props.value}
		</div>
	)
}
	
export default Button;