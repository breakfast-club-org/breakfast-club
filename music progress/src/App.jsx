// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
			<div className="audio-player">
				<div className="title-controls">
					<h2 className="title">Play</h2>
					<div className="controls">
						<button className="play"></button>
					</div>
				</div>
				<div className="progress-bar"></div>
			</div>

			<div className="audio-player">
				<div className="title-controls">
					<h2 className="title">Pause</h2>
					<div className="controls">
						<button className="pause"></button>
					</div>
				</div>
				<div className="progress-bar"></div>
			</div>

			<div className="audio-player">
				<div className="title-controls">
					<h2 className="title">Replay</h2>
					<div className="controls">
						<button className="replay"></button>
					</div>
				</div>
				<div className="progress-bar"></div>
			</div>
    </div>
  )
}

export default App
