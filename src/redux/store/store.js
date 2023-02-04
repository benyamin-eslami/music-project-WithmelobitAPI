import { configureStore } from "@reduxjs/toolkit";
import { melobitApi } from "../services/melobitApi";
import playerReducer from "../features/player";

export const store = configureStore({
  reducer: {
    [melobitApi.reducerPath]: melobitApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(melobitApi.middleware),
});
