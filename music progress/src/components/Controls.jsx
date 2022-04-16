import React from "react";

export default function Controls({ isPlaying, setIsPlaying, handleClick }) {

	function handleClick() {
		setIsPlaying(!isPlaying)
	}

	return (
		<button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
	)
}