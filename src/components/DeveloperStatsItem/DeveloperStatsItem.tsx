import "./DeveloperStatsItem.scss";

import { useGetCSSClassBasedOnThemeModeContext } from "../../hooks/useGetCSSClassBasedOnThemeMode";

import { DeveloperStatsItemProps } from "../../types/componentProps";

//------ COMPONENT: START ------ //

export default function DeveloperStatsItem(props: DeveloperStatsItemProps) {
  const statsItemValueClass = useGetCSSClassBasedOnThemeModeContext(
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
