// import { useState } from 'react'
import '/src/styles.scss';
import Button from './Button';
import { useState } from 'react';

function MusicPlayer() {
	const [isPlaying, setIsPlaying] = useState(true);
	const [buttonType, setButtonType] = useState('pause') // with autoplay on pause is the default

	const handleControls = () => {
		const audioEl = document.getElementById('audio')
		if (isPlaying) {
			audioEl.pause();
			setIsPlaying(false);
			setButtonType('play')
		} else {
			audioEl.play();
			setIsPlaying(true);
			setButtonType('pause')
		}
	}

	return (
		<div className="music-player">
			<div className="toolbar">
				<i className="fa-solid fa-chevron-down"></i>
				<p className="copy-small copy-bold">Jazz</p>
				<i className="fa-solid fa-ellipsis-vertical"></i>
			</div>
			<div className="song-art">
				<img className="song-art-img" src="../assets/album-art.jpg"/>
			</div>
			<div className="song-info">
				<p>
					<span className="copy-regular copy-bold">Jazz Comedy</span>
					<span className="copy-small">Ben Sounds</span>
				</p>
				<i className="fa-solid fa-heart"></i>
			</div>
			<div className="controls">
				<audio id="audio" src="./assets/bensound-jazzcomedy.mp3" autoPlay/>
				<button className="button-small"><i className="fa-solid fa-shuffle"></i></button>
				<button><i className="fa-solid fa-backward-step"></i></button>
				<Button type={buttonType} onClick={handleControls}/>
				<button><i className="fa-solid fa-forward-step"></i></button>

				{/* Replay */}
				<button className="button-small"><i class="fa-solid fa-arrow-rotate-right"></i></button>
			</div>
		</div>
		)
	}


export default MusicPlayer
