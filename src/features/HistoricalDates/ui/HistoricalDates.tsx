import React, { useState, useEffect, useReducer } from "react";

import { Title } from "@shared/ui/Title/Title";
import { Timeline, validateTimeline } from "@shared/types/timeline";
import { Tabs } from "@widgets/Tabs/ui/Tabs";

import classes from "./historical-dates.module.scss";
import { Slider } from "@widgets/Slider/ui/Slider";

interface HistoricalDatesProps {
  data: Timeline;
}

export const HistoricalDates = ({ data }: HistoricalDatesProps) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    const valid = validateTimeline(data);
    setIsValid(valid);
    
    if (!valid) {
      console.error('Invalid timeline data provided');
    }
  }, [data]);

  if (!isValid) {
    return (
      <section className={classes.historicalDates_section}>
        <div className={classes.historicalDates_wrapper}>
          <Title wrap title="Ошибка данных" />
          <p>Предоставленные данные не соответствуют требованиям временной шкалы</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="historical-dates"
      className={classes.historicalDates_section}
    >
      <div className={classes.historicalDates_wrapper}>
        <Title wrap title="Исторические даты" />
        <Tabs data={data} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Slider data={data[activeTab - 1].events} />
      </div>
    </section>
  );
};
