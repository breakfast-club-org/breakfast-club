import MusicPlayer from './components/MusicPlayer'
import './App.css'

import playlist from './data/playlist.json'

function App() {

  return (
    <div className="App">
      <MusicPlayer playlist={playlist} />
    </div>
  )
}

export default App
