import { createSlice } from "@reduxjs/toolkit";
import coverIcon from "../../assets/images/cover.jpg";
import audio from "../../assets/music/reza.mp3";
const initialPlayerState = {
  activeSong: {
    music: {
      album: { name: "Iran Iran (Deli)" },
      artists: [{ fullName: "Reza Bahram" }],
      audio: { medium: { url: audio } },
      image: { thumbnail_small: { url: coverIcon } },
    },
  },
  isPlaying: false,
  currentSongList: [],
  currentIndex: 0,
  isActive: false,
  audioSrc: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState: initialPlayerState,
  reducers: {
    setActiveSong: (state, action) => {
      state.currentSongList = action.payload.currentListData;
      state.activeSong = action.payload.music;
      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (state.currentSongList[action.payload]) {
        state.activeSong = state.currentSongList[action.payload];
      }
      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongList[action.payload]) {
        state.activeSong = state.currentSongList[action.payload];
      }
      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});
export const { setActiveSong, nextSong, prevSong, playPause } =
  playerSlice.actions;

export default playerSlice.reducer;
