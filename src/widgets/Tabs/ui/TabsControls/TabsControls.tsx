import React from "react";

import classes from "./tabsControls.module.scss";
import { Button } from "@shared/ui/Button/Button";
import { useAssetPath } from "@shared/lib/hooks/useAssetPath";
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
  const getAssetPath = useAssetPath;

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
          <img
            src={getAssetPath("/assets/icons/arrow-left.svg")}
            alt="arrow left"
          />
        </Button>
        <Button
          disabled={activeTab === totalTabs}
          variant="rounded"
          styleVariant="bordered"
          onClick={handleNextTab}
        >
          <img
            src={getAssetPath("/assets/icons/arrow-right.svg")}
            alt="arrow right"
          />
        </Button>
      </div>
    </div>
  );
};
