import React from "react";
import '../styles/ProgressBar.css';

export default function ProgressBar({ duration, currentTime }) {

	return (
		<>
		<progress className="progress-bar" max={duration} value={currentTime}></progress>
		<div className="fine-details">
			<p className="audio-duration">Duration: {duration}</p>
			<p className="audio-current-time">Current time: {currentTime}</p>
		</div>
		</>
	)
}