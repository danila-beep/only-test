import React, { useEffect, useState } from "react";
import { Timeline } from "@shared/types/timeline";
import { Circle } from "./Circle";
import { YearCounter } from "./YearCounter";
import { TabsControls } from "./TabsControls";

import classes from "./tabs.module.scss";

export const Tabs = ({
  data,
  activeTab,
  setActiveTab,
}: {
  data: Timeline;
  activeTab: number;
  setActiveTab: (index: number) => void;
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const setActiveTabHadler = (index: number) => {
    setActiveTab(index);
  };

  const handlePrevTab = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    } else {
      setActiveTab(6);
    }
  };

  const handleNextTab = () => {
    if (activeTab < 6) {
      setActiveTab(activeTab + 1);
    } else {
      setActiveTab(1);
    }
  };

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
          from={data[activeTab - 1].events[0].date.getFullYear()}
          to={data[activeTab - 1].events[
            data[data.length - 1].events.length - 1
          ].date.getFullYear()}
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
