import React, { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@shared/model/store";
import { HistoricalDates } from "@features/HistoricalDates/ui/HistoricalDates";

import classes from "./app.module.scss";

const App: React.FC = () => {
  const historicalData = useSelector((state: RootState) => state.timeline);

  return (
    <main className={classes.app_wrapper}>
      <HistoricalDates data={historicalData} />
    </main>
  );
};

export default App;
