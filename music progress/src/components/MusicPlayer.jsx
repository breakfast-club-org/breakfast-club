import React, { useState, useRef, useEffect } from "react";

import Controls from './Controls';
import SongDetails from "./SongDetails";
import ProgressBar from "./ProgressBar";

import '../styles/MusicPlayer.css';

export default function MusicPlayer({ playlist }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [audioSrc, setAudioSrc] = useState('');
	const [audioDuration, setAudioDuration] = useState(0);
	const [audioCurrentTime, setAudioCurrentTime] = useState(0);
	const [playlistCounter, setPlaylistCounter] = useState(0);
	const [playlistTotal, setPlaylistTotal] = useState(0);
	const audioRef = useRef(null);

	useEffect(() => {
		// set player to first song in playlist once mounted
		setFirstSong();
		// set playlist total
		setPlaylistTotal(playlist.length);
	}, []);

	useEffect(() => {
		// play or pause audio
		if (isPlaying) {
			audioRef.current.play()
		} else {
			audioRef.current.pause()
		}
		// listen for events when isPlaying state changes
		audioEvents();

	}, [isPlaying]);

	useEffect(() => {
		// when playlistCounter updates, update the audioSrc
		setAudioSrc(playlist[playlistCounter].src);
	}, [playlistCounter]);

	const audioEvents = () => {
		audioRef.current.addEventListener('canplaythrough', () => {
			// set duration when we can play through
			setAudioDuration(audioRef.current.duration);
		})

		audioRef.current.addEventListener('ended', () => {
			setIsPlaying(false);
		})
		audioRef.current.addEventListener('timeupdate', () => {
			// update currentTime which is used for progressBar
			setAudioCurrentTime(audioRef.current.currentTime)
		})
	}

	const setFirstSong = () => {
		setAudioSrc(playlist[playlistCounter].src);
	}

	const handlePlayPauseClick = () => {
		setIsPlaying(!isPlaying)
	}

	const handlePrevClick = () => {
		if (playlistCounter > 0) {
			setPlaylistCounter(prevState => prevState - 1);
			setIsPlaying(false);
		}
	}

	const handleNextClick = () => {
		// subtract 1 from length because we start at 0
		if (playlistCounter < playlistTotal - 1) {
			setPlaylistCounter(prevState => prevState + 1);
			setIsPlaying(false);
		}
	}

	return (
		<div className="music-player">
			<audio ref={audioRef} src={audioSrc}></audio>
			<Controls
				isPlaying={isPlaying}
				handlePlayPauseClick={handlePlayPauseClick}
				handlePrevClick={handlePrevClick}
				handleNextClick={handleNextClick}
				playlistCounter={playlistCounter}
				playlistTotal={playlistTotal}
			/>
			<SongDetails
				details={playlist[playlistCounter]}
				playlistCounter={playlistCounter}
			/>
			<ProgressBar
				isPlaying={isPlaying}
				duration={audioDuration}
				currentTime={audioCurrentTime}
			/>
		</div>
	)
}