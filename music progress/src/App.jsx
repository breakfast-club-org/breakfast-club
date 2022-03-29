import { useState } from 'react'
import './App.css'

function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [buttonIcon, setButtonIcon] = useState('play');

	const clickHandler = () => {
		const audio = document.getElementById('audio');
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

  return (
    <div className="App">
			<div className="audio-player">
				<div className="title-controls">
					<h2 className="title">Mah N&agrave; Mah N&agrave;</h2>
					<div className="controls">
						<button onClick={clickHandler} className={buttonIcon}></button>
					</div>
					<audio id="audio"
								src="./src/audio/mah-na-mah-na.m4r">
									Your browser does not support the <code>audio</code> element.
					</audio>
				</div>
				<div className="progress-bar"></div>
			</div>
    </div>
  )
}

export default App
