import { configureStore } from "@reduxjs/toolkit";
import timelineReducer from "@entities/timeline/timeline.slice";
export const store = configureStore({
  reducer: {
    timeline: timelineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
