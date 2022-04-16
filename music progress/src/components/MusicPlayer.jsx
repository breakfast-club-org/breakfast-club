import React, { useState, useRef, useEffect } from "react";

import Controls from './Controls'
import ProgressBar from "./ProgressBar";

import '../styles/MusicPlayer.css'

export default function MusicPlayer({ playlist }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [audioDuration, setAudioDuration] = useState(0);
	const [audioCurrentTime, setAudioCurrentTime] = useState(0);
	const currentSong = playlist[2];
	const audioRef = useRef(new Audio(currentSong.src));

	useEffect(() => {
		// play or pause audio
		if (isPlaying) {
			audioRef.current.play()
		} else {
			audioRef.current.pause()
		}

		// Listen for audio events when playing
		audioEvents();

	}, [isPlaying]);

	const audioEvents = () => {
		audioRef.current.addEventListener('canplaythrough', () => {
			setAudioDuration(audioRef.current.duration);
		})

		audioRef.current.addEventListener('ended', () => {
			setIsPlaying(false);
		})
		audioRef.current.addEventListener('timeupdate', () => {
			setAudioCurrentTime(audioRef.current.currentTime)
		})
	}

	return (
		<div className="music-player">
			<Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
			<div className="song-details">
				<h3 className="title">{currentSong.title}</h3>
				<p className="artist">{currentSong.artists}</p>
			</div>
			<ProgressBar isPlaying={isPlaying} duration={audioDuration} currentTime={audioCurrentTime} />
		</div>
	)
}