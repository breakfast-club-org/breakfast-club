import { useState } from 'react'
import './music-player.css'

function MusicPlayer({id, title, audio}) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [buttonIcon, setButtonIcon] = useState('play');

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

  return (
		<div className="music-player">
			<div className="title-controls">
				<h2 className="title" dangerouslySetInnerHTML={createMarkup(title)}></h2>
				<div className="controls">
					<button onClick={clickHandler} className={`btn btn-${buttonIcon}`}></button>
				</div>
				<audio id={`audio-${id}`}
							src={audio}
							onEnded={endedHandler}>
								Your browser does not support the <code>audio</code> element.
				</audio>
			</div>
			<div className="progress-bar"></div>
		</div>
  )
}

export default MusicPlayer
