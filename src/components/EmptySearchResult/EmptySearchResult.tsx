import "./EmptySearchResult.scss";

import noResultIconForLightMode from "./assets/icon-no-result--light-mode.svg";
import noResultIconForDarkMode from "./assets/icon-no-result--dark-mode.svg";

import {
  getIconBasedOnThemeModeContext,
  getClassBasedOnThemeModeContext,
} from "../../helpers/helper-functions";

import { useThemeModeContext } from "../../hooks/useThemeModeContext";

//------ COMPONENT: START ------ //

export default function EmptySearchResult() {
  const themeModeContext = useThemeModeContext();

  const emptySearchResultIcon = getIconBasedOnThemeModeContext(
    themeModeContext,
    noResultIconForLightMode,
    noResultIconForDarkMode
  );

  const emptySearchResultMessage = getClassBasedOnThemeModeContext(
    themeModeContext,
    "empty-search-result__message"
  );

  return (
    <span className="empty-search-result">
      <img className="empty-search-result__icon" src={emptySearchResultIcon} />
      <p className={emptySearchResultMessage}>
        No GitHub user has been found with the specified name...
      </p>
    </span>
  );
}

//------ COMPONENT: END ------ //
