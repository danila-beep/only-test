import React, { useState } from "react";

import { Title } from "@shared/ui/Title/Title";
import { Timeline } from "@shared/types/timeline";
import { Tabs } from "@widgets/Tabs/ui/Tabs";

import classes from "./historical-dates.module.scss";
import { Slider } from "@widgets/Slider/ui/Slider";

type HistoricalDatesProps = {
  data: Timeline;
};

export const HistoricalDates = ({ data }: HistoricalDatesProps) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <section
      id="historical-dates"
      className={`${classes.historicalDates_section}`}
    >
      <div className={classes.historicalDates_wrapper}>
        <Title wrap title="Исторические даты" />
        <Tabs data={data} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Slider data={data[activeTab - 1].events} />
      </div>
    </section>
  );
};
