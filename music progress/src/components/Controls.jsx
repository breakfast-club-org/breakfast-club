import React from "react";

export default function Controls({ isPlaying, setIsPlaying }) {

	function handleClick() {
		setIsPlaying(!isPlaying)
	}

	return (
		<button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
	)
}