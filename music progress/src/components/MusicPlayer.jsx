import React, { useState, useRef, useEffect } from "react";

import AlbumArtwork from "./AlbumArtwork";
import Controls from './Controls';
import SongDetails from "./SongDetails";
import ProgressBar from "./ProgressBar";

import '../styles/MusicPlayer.css';

export default function MusicPlayer({ playlist }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [audioSrc, setAudioSrc] = useState('');
	const [albumArtwork, setAlbumArtwork] = useState('');
	const [audioDuration, setAudioDuration] = useState(0);
	const [audioCurrentTime, setAudioCurrentTime] = useState(0);
	const [playlistCounter, setPlaylistCounter] = useState(0);
	const [playlistTotal, setPlaylistTotal] = useState(0);
	const audioRef = useRef(null);

	useEffect(() => {
		// set player to first song in playlist once mounted
		setSong();
		// set playlist total
		setPlaylistTotal(playlist.length);
	}, []);

	useEffect(() => {
		// play or pause audio
		if (isPlaying) {
			playAudio();
		} else {
			pauseAudio();
		}
	}, [audioSrc]);

	useEffect(() => {
		// play or pause audio
		if (isPlaying) {
			playAudio();
		} else {
			pauseAudio();
		}
		// listen for events when isPlaying state changes
		audioEvents();

	}, [isPlaying]);

	useEffect(() => {
		setSong();
	}, [playlistCounter]);

	const playAudio = () => {
		audioRef.current.play();
	}

	const pauseAudio = () => {
		audioRef.current.pause();
	}

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

	const setSong = () => {
		setAudioSrc(playlist[playlistCounter].src);
		setAlbumArtwork(playlist[playlistCounter].albumArtwork);
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
			if (!isPlaying) {
				setIsPlaying(false);
			}
		}
	}

	return (
		<div className="music-player">
			<audio ref={audioRef} src={audioSrc}></audio>
			<AlbumArtwork src={albumArtwork} />
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