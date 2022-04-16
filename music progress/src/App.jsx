import MusicPlayer from './components/MusicPlayer'
import './App.css'

import playlist from './data/playlist.json'

// const playlist = [
//   {
//     src: '/src/assets/spongebob-two-hours-later.mp3',
//     title: 'Spongebob - Two Hours Later',
//     artists: ''
//   }
// ]

function App() {

  return (
    <div className="App">
      <MusicPlayer playlist={playlist} />
    </div>
  )
}

export default App
