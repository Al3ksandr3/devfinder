import "./Header.scss";

import { ThemeModeContext } from "../../Root";

import { useContext } from "react";
import { useReturnThemeModeRelatedInfo } from "./helpers";

// ------ COMPONENT: START ------ //

export default function Header() {
  const themeModeContext = useContext(ThemeModeContext);

  const {
    themeModeLabel,
    themeModeIconSource,
    themeModeAltText,
    appNameClass,
  } = useReturnThemeModeRelatedInfo(themeModeContext);

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
      <h1 className={appNameClass}>devfinder</h1>
      <span className="header__mode-switcher">
        <p className="header__mode-switcher__mode-label">{themeModeLabel}</p>
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
