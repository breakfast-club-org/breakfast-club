import { useState } from 'react'
import ProgressBar from "../progress-bar/progress-bar.jsx";
import './music-player.css'

function MusicPlayer({id, title, audio}) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [buttonIcon, setButtonIcon] = useState('play');
	const [progressStatus, setProgressStatus] = useState(0);

	const clickHandler = () => {
		const audio = document.getElementById(`audio-${id}`);
		if (isPlaying) {
			audio.pause();
			setIsPlaying(false);
			setButtonIcon('play');
		} else {
			audio.play();
			setIsPlaying(true);
			setButtonIcon('pause');
		}
	}

	const endedHandler = () => {
		setIsPlaying(false);
		setButtonIcon('replay');
	}

	const createMarkup = (text) => {
		return {__html: text};
	}

	const timeUpdateHandler = () => {
		const audio = document.getElementById(`audio-${id}`);
		let duration = audio.duration;
		let currentTime = audio.currentTime;
		let progressPercentage = Math.ceil(currentTime / duration * 100);
		progressPercentage = progressPercentage + '%';
		console.log("progressPercentage: ", progressPercentage);
		setProgressStatus(progressPercentage);
	}

  return (
		<div className="music-player">
			<div className="title-controls">
				<h2 className="title" dangerouslySetInnerHTML={createMarkup(title)}></h2>
				<div className="controls">
					<button onClick={clickHandler} className={`btn btn-${buttonIcon}`}></button>
				</div>
				<audio id={`audio-${id}`}
							src={audio}
							onEnded={endedHandler}
							onTimeUpdate={timeUpdateHandler}>
								Your browser does not support the <code>audio</code> element.
				</audio>
			</div>
			<ProgressBar status={progressStatus} />
		</div>
  )
}

export default MusicPlayer
