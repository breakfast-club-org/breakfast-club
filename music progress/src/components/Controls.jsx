import React from "react";
import '../styles/Controls.css';

export default function Controls({ isPlaying,handlePlayPauseClick, handleNextClick, handlePrevClick }) {

	return (
		<div className="controls">
			<button onClick={handlePlayPauseClick}>{isPlaying ? 'Pause' : 'Play'}</button>
			<button onClick={handlePrevClick}>Prev</button>
			<button onClick={handleNextClick}>Next</button>
		</div>
	)
}