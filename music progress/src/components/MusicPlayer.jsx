import React, { useState, useRef, useEffect } from "react";

import Controls from './Controls'
import '../styles/MusicPlayer.css'

export default function MusicPlayer({ src, title }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(new Audio(src));

	useEffect(() => {
		// play or pause audio
		if (isPlaying) {
			audioRef.current.play()
		} else {
			audioRef.current.pause()
		}

		// watch for ended event from audio element
		audioRef.current.addEventListener('ended', () => {
			setIsPlaying(false);
		})

	}, [isPlaying]);


	return (
		<div className="music-player">
			<Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
			<h3 className="title">{title}</h3>
		</div>
	)
}