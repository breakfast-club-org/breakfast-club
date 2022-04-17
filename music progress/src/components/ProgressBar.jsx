import React from "react";
import '../styles/ProgressBar.css';

export default function ProgressBar({ isPlaying, duration, currentTime }) {

	return (
		<>
		<progress className="progress-bar" max={duration} value={currentTime}></progress>
		<p className="audio-duration">Duration: {duration}</p>
		<p className="audio-current-time">Current time: {currentTime}</p>
		</>
	)
}