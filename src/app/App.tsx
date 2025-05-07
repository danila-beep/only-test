import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@shared/model/store";
import { HistoricalDates } from "@features/HistoricalDates/ui/HistoricalDates";

import classes from "./app.module.scss";
import { setTimeline } from "@entities/timeline/timeline.slice";
import { MOCK_TIMELINE_VARIANTS } from "@entities/timeline/timeline.data";
const App: React.FC = () => {
  const historicalData = useSelector((state: RootState) => state.timeline);
  const dispatch = useDispatch();

  const [timelineCategories, setTimelineCategories] = useState<string>("2");

  useEffect(() => {
    dispatch(setTimeline(MOCK_TIMELINE_VARIANTS[timelineCategories]));
  }, [timelineCategories]);

  return (
    <main className={classes.app_wrapper}>
      <div className={classes.timline_variants_selection}>
        <p>Выберите количество категорий</p>
        <select name="timeline_selector" id="" onChange={(e) => setTimelineCategories(e.target.value)}>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <HistoricalDates data={historicalData} />
    </main>
  );
};

export default App;
