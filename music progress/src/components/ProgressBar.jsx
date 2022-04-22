import React from "react";
import '../styles/ProgressBar.css';

export default function ProgressBar({ duration, currentTime }) {

	return (
		<progress className="progress-bar" max={duration} value={currentTime}></progress>
	)
}