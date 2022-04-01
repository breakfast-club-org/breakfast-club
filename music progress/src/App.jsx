// import { useState } from 'react'
import "./App.css";
import { MusicPlayer } from "./components/MusicPlayer/MusicPlayer";

const data = {
  src: "src/assets/t-rex-roar.mp3",
  title: "roar"
}

function App() {
  return (
    <div className="App">
      <MusicPlayer { ...data }/>
    </div>
  );
}

export default App;
