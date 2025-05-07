import React from "react";

import classes from "./tabsControls.module.scss";
import { Button } from "@shared/ui/Button/Button";

export const TabsControls = ({
  activeTab,
  totalTabs,
  handlePrevTab,
  handleNextTab,
}: {
  activeTab: number;
  totalTabs: number;
  handlePrevTab: () => void;
  handleNextTab: () => void;
}) => {
  return (
    <div className={classes.tabs__controls}>
      <div className={classes.tabs__controls__pagination}>
        {`0${activeTab} / 0${totalTabs}`}
      </div>
      <div className={classes.tabs__controls__buttons}>
        <Button
          disabled={activeTab === 1}
          variant="rounded"
          styleVariant="bordered"
          onClick={handlePrevTab}
        >
          <img src={"/assets/icons/arrow-left.svg"} alt="arrow left" />
        </Button>
        <Button
          disabled={activeTab === totalTabs}
          variant="rounded"
          styleVariant="bordered"
          onClick={handleNextTab}
        >
          <img src={"/assets/icons/arrow-right.svg"} alt="arrow right" />
        </Button>
      </div>
    </div>
  );
};
