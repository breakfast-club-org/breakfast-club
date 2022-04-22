import React from "react";
import '../styles/Controls.css';

export default function Controls({ isPlaying, handlePlayPauseClick, handleNextClick, handlePrevClick, playlistCounter, playlistTotal }) {

	return (
		<div className="controls">
			<button
				className="btn-prev"
				onClick={handlePrevClick}
				disabled={playlistCounter === 0 ? 'disabled' : ''}
			>
				Prev
			</button>

			<button
				className="btn-play-pause"
				onClick={handlePlayPauseClick}
			>
				{isPlaying ? 'Pause' : 'Play'}
			</button>

			<button
				className="btn-next"
				onClick={handleNextClick}
				disabled={playlistCounter === playlistTotal - 1 ? 'disabled' : ''}
			>
				Next
			</button>
		</div>
	)
}