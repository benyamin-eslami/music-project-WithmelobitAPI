import { prevSong, nextSong, playPause } from "../../redux/features/player";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Player from "./Player";
import Controls from "./Controls";
import Seekbar from "./Seekbar";
import Volumebar from "./Volumebar";

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, currentSongList, currentIndex } = useSelector(
    (state) => state.player
  );
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.3);

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  let coverImage;
  let fullName;
  let name;
  if (activeSong?.music) {
    coverImage = activeSong?.music.image?.thumbnail_small.url;
    fullName = activeSong?.music.artists[0].fullName;
    name = activeSong?.music.album.name;
  } else if (activeSong?.image?.thumbnail_small.url) {
    coverImage = activeSong?.image?.thumbnail_small.url;
    fullName = activeSong?.artists[0].fullName;
    name = activeSong?.album.name;
  } else if (activeSong?.song) {
    coverImage = activeSong?.song?.image?.thumbnail_small.url;
    fullName = activeSong?.song?.artists[0].fullName;
    name = activeSong?.song?.album.name;
  }
  const handleNextSong = () => {
    if (shuffle) {
      dispatch(nextSong(Math.floor(Math.random() * currentSongList.length)));
    } else {
      console.log("next");
      if (currentIndex !== currentSongList.length - 1) {
        dispatch(nextSong(currentIndex + 1));
      } else {
        dispatch(nextSong(0));
      }
    }
  };
  const handlePrevSong = () => {
    if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongList.length)));
    } else {
      console.log("next");
      if (currentIndex > 0) {
        dispatch(prevSong(currentIndex - 1));
      } else {
        dispatch(prevSong(currentSongList.length - 1));
      }
    }
  };

  return (
    <div className="w-full rounded-lg duration-200 z-50 flex items-center justify-between fixed text-white bottom-0 bg-gradient-to-br from-white/5 to-secondary backdrop-blur-lg ">
      <div className="flex items-center gap-3 p-1 md:p-5">
        <img
          className="p-3  block rounded-full w-[6rem]"
          src={coverImage}
          alt="cover"
        />
        <div>
          <h3 className="  font-bold text-xl block">{name}</h3>
          <p className=" text-gray-200 block">{fullName}</p>
        </div>
      </div>
      <Controls
        isPlaying={isPlaying}
        repeat={repeat}
        setRepeat={setRepeat}
        shuffle={shuffle}
        setShuffle={setShuffle}
        handlePlayPause={handlePlayPause}
        handlePrevSong={handlePrevSong}
        handleNextSong={handleNextSong}
      />
      <Seekbar
        value={appTime}
        min="0"
        max={duration}
        onInput={(event) => setSeekTime(event.target.value)}
        setSeekTime={setSeekTime}
        appTime={appTime}
      />
      <Volumebar
        volume={volume}
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />

      <Player
        activeSong={activeSong}
        volume={volume}
        isPlaying={isPlaying}
        seekTime={seekTime}
        repeat={repeat}
        onEnded={handleNextSong}
        onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
        onLoadedData={(event) => setDuration(event.target.duration)}
      />
    </div>
  );
};

export default MusicPlayer;
