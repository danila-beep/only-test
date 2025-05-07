import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Timeline } from "@shared/types/timeline";
import { MOCK_TIMELINE } from "./timeline.data";

type Store = Timeline;

const initialState: Store = MOCK_TIMELINE;

const timelineSlice = createSlice({
  name: "timeline",
  initialState,
  reducers: {
    setTimeline: (state, action) => {
      return action.payload;
    },
    getTimelineById: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id === action.payload);
    },
    getTimelineByCategory: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.category === action.payload);
    },
  },
});

export const { setTimeline, getTimelineById, getTimelineByCategory } = timelineSlice.actions;
export default timelineSlice.reducer;
