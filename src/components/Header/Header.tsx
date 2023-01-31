import "./Header.scss";

import { useGetCSSClassBasedOnThemeModeContext } from "../../hooks/useGetCSSClassBasedOnThemeMode";

import { useThemeModeContext } from "../../hooks/useThemeModeContext";
import { useReturnThemeModeRelatedInfo } from "./helpers";

// ------ COMPONENT: START ------ //

export default function Header() {
  const themeModeContext = useThemeModeContext();

  const platformNameClass = useGetCSSClassBasedOnThemeModeContext(
    "header__platform-name"
  );

  const modeLabelClass = useGetCSSClassBasedOnThemeModeContext(
    "header__mode-switcher__mode-label"
  );

  const { themeModeLabel, themeModeIconSource, themeModeAltText } =
    useReturnThemeModeRelatedInfo(themeModeContext);

  function handleModeIconClick() {
    if (typeof themeModeContext === "string") {
      alert("The component is out of a context...");
    } else {
      themeModeContext.dispatchThemeMode({
        payload: themeModeContext.themeMode === "light" ? "dark" : "light",
      });
    }
  }

  return (
    <header className="header">
      <h1 className={platformNameClass}>devfinder</h1>
      <span className="header__mode-switcher">
        <p className={modeLabelClass}>{themeModeLabel}</p>
        <img
          className="header__mode-switcher__switch-button"
          src={themeModeIconSource}
          alt={themeModeAltText}
          onClick={handleModeIconClick}
        />
      </span>
    </header>
  );
}

// ------ COMPONENT: END ------ //
