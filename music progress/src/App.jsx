import './App.css'
import MusicPlayer from "./components/music-player/music-player.jsx";

function App() {

  return (
    <div className="App">
			<MusicPlayer 
				id="piano" 
				title="Piano key" 
				audio="src/assets/audio/piano-note.mp3"/>
			<MusicPlayer 
				id="muppets"
				title="Mah N&agrave; Mah N&agrave;" 
				audio="src/assets/audio/mah-na-mah-na.m4r"/>
    </div>
  )
}

export default App
