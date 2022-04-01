import React, { useState, useEffect, useRef } from "react";

import { MusicPlayerControls } from "../MusicPlayerControls/MusicPlayerControls";
import styles from './MusicPlayer.module.css';

export const MusicPlayer = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className={styles.musicPlayer}>
      <div className={styles.controlsContainer}>
        <MusicPlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <h2 className="title">{title}</h2>
      </div>
      <div>tracking bar</div>
    </div>
  );
};
