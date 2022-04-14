import './progress-bar.css'

function ProgressBar({status}) {

	return (
		<div className='progress-bar' style={{'width': status}}></div>
)	
}

export default ProgressBar
