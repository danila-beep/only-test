import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@shared/model/store";
import { HistoricalDates } from "@features/HistoricalDates/ui/HistoricalDates";

import classes from "./app.module.scss";
import { setTimeline } from "@entities/timeline/timeline.slice";
import { MOCK_TIMELINE_VARIANTS } from "@entities/timeline/timeline.data";
const App: React.FC = () => {
  const historicalData = useSelector((state: RootState) => state.timeline);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTimeline(MOCK_TIMELINE_VARIANTS["2_items"]));
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    const key = `${value}_items` as keyof typeof MOCK_TIMELINE_VARIANTS;
    dispatch(setTimeline(MOCK_TIMELINE_VARIANTS[key]));
  };

  return (
    <main className={classes.app_wrapper}>
      <div className={classes.timline_variants_selection + " " + (isMenuVisible ? classes.visible : "")}>
        <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
          {isMenuVisible ? "Скрыть меню" : "Выбрать количество категорий"}
        </button>
        {isMenuVisible && ( 
          <>
            <p>Выберете количество категорий</p>
            <select onChange={(e) => handleSelectChange(e)}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </>
        )}
      </div>
      <HistoricalDates data={historicalData} />
    </main>
  );
};

export default App;
