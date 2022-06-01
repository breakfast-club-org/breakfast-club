import './progress-bar.css'

function ProgressBar({status, sliderHandler}) {

	return (
		<div className='progress-bar-wrapper'>
			<div className='progress-bar' style={{'width': status}} />
			<input 
				className="slider" 
				type="range" 
				min="0" 
				max="100"
				onChange={sliderHandler} />
		</div>
)	
}

export default ProgressBar
