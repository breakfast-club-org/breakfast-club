import MusicPlayer from './components/MusicPlayer'
import './App.css'

const data = {
  src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
  title: 'ROAR'
}

function App() {

  return (
    <div className="App">
      <MusicPlayer { ...data } />
    </div>
  )
}

export default App
