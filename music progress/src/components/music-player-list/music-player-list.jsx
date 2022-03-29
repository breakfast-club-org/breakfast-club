import './music-player-list.css'
import MusicPlayerData from "./music-player-list.json";
import MusicPlayer from "../music-player/music-player.jsx";

function MusicPlayerList() {

  return (
    <div className="music-player-list">
				{MusicPlayerData.map((song, idx) => (
					<MusicPlayer 
						key={idx}
						id={idx} 
						title={song.title} 
						audio={song.audioUrl}/>
				))}
    </div>
  )
}

export default MusicPlayerList
