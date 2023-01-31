import "./DeveloperStatsItem.scss";

import { getClassBasedOnThemeModeContext } from "../../helpers/helper-functions";

import { useThemeModeContext } from "../../hooks/useThemeModeContext";

import { DeveloperStatsItemProps } from "../../types/componentProps";

//------ COMPONENT: START ------ //

export default function DeveloperStatsItem(props: DeveloperStatsItemProps) {
  const themeModeContext = useThemeModeContext();

  const statsItemValueClass = getClassBasedOnThemeModeContext(
    themeModeContext,
    "developer-stats-item__value"
  );

  return (
    <span className="developer-stats-item">
      <p className="developer-stats-item__name">{props.statName}</p>
      <p className={statsItemValueClass}>{props.statValue}</p>
    </span>
  );
}

//------ COMPONENT: END ------ //
