import React, { useEffect, useMemo, useCallback } from "react";
import { Timeline } from "@shared/types/timeline";
import { Circle } from "./Circle/Circle";
import { YearCounter } from "./YearCounter/YearCounter";
import { TabsControls } from "./TabsControls/TabsControls";
import { useMediaQuery } from "@shared/lib/hooks/useMediaQuery";
import classes from "./tabs.module.scss";

interface TabsProps {
  data: Timeline;
  activeTab: number;
  setActiveTab: (value: number | ((prev: number) => number)) => void;
}

export const Tabs = ({ data, activeTab, setActiveTab }: TabsProps) => {
  const { isMobile } = useMediaQuery();

  const setActiveTabHadler = useCallback((index: number) => {
    setActiveTab(index);
  }, [setActiveTab]);

  const handlePrevTab = useCallback(() => {
    setActiveTab((prev: number) => prev > 1 ? prev - 1 : data.length);
  }, [data.length, setActiveTab]);

  const handleNextTab = useCallback(() => {
    setActiveTab((prev: number) => prev < data.length ? prev + 1 : 1);
  }, [data.length, setActiveTab]);

  const yearRange = useMemo(() => {
    const currentPeriod = data[activeTab - 1];
    const firstYear = currentPeriod.events[0].date.getFullYear();
    const lastYear = currentPeriod.events[currentPeriod.events.length - 1].date.getFullYear();
    return { from: firstYear, to: lastYear };
  }, [data, activeTab]);

  return (
    <div
      className={classes.tabs_wrapper}
      data-category={data[activeTab - 1].category}
    >
      <div className={classes.tabs__content}>
        {!isMobile && (
          <Circle
            data={data}
            setActiveTabHadler={setActiveTabHadler}
            currentActiveTabIndex={activeTab}
          />
        )}
        <YearCounter
          from={yearRange.from}
          to={yearRange.to}
        />
      </div>

      <TabsControls
        activeTab={activeTab}
        totalTabs={data.length}
        handlePrevTab={handlePrevTab}
        handleNextTab={handleNextTab}
      />
    </div>
  );
};
