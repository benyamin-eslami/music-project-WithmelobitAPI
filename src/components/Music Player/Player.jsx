import { useEffect, useRef } from "react";
// import audioSrc from "../../assets/01 Hollywood's Bleeding.mp3";
const Player = ({
  volume,
  isPlaying,
  seekTime,
  repeat,
  onTimeUpdate,
  onLoadedData,
  activeSong,
  onEnded,
}) => {
  const audioRef = useRef(null);

  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    audioRef.current.currentTime = seekTime;
  }, [seekTime]);

  let audioSrc;
  if (activeSong?.audio) {
    audioSrc = activeSong?.audio?.medium.url;
  } else if (activeSong?.song?.audio) {
    audioSrc = activeSong?.song?.audio?.medium.url;
  }

  return (
    <audio
      onLoadedData={onLoadedData}
      onTimeUpdate={onTimeUpdate}
      ref={audioRef}
      src={audioSrc}
      loop={repeat}
      onEnded={onEnded}
    />
  );
};

export default Player;
