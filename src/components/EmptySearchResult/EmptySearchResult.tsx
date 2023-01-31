import "./EmptySearchResult.scss";

import noResultIconForLightMode from "./assets/no-result-icon--light-mode.svg";
import noResultIconForDarkMode from "./assets/no-result-icon--dark-mode.svg";

import { useGetCSSClassBasedOnThemeModeContext } from "../../hooks/useGetCSSClassBasedOnThemeMode";
import { useGetIconBasedOnThemeMode } from "../../hooks/useGetIconBasedOnThemeMode";

//------ COMPONENT: START ------ //

export default function EmptySearchResult() {
  const searchResultIcon = useGetIconBasedOnThemeMode(
    noResultIconForLightMode,
    noResultIconForDarkMode
  );

  const searchResultMessageClass = useGetCSSClassBasedOnThemeModeContext(
    "empty-search-result__message"
  );

  return (
    <span className="empty-search-result">
      <img className="empty-search-result__icon" src={searchResultIcon} />
      <p className={searchResultMessageClass}>
        No GitHub user has been found with the specified name...
      </p>
    </span>
  );
}

//------ COMPONENT: END ------ //
