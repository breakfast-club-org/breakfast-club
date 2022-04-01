import styles from './MusicPlayerControls.module.css';

export const MusicPlayerControls = ({ isPlaying, setIsPlaying }) => {
  return (
    <button
      className={styles.musicPlayerControls}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {isPlaying === true ? "Pause" : "Play"}
    </button>
  );
};
