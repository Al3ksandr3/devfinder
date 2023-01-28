import { ThemeModeContextType } from "../../Root";

import IconToTurnLightMode from "./assets/icon-light-mode.svg";
import IconToTurnDarkMode from "./assets/icon-dark-mode.svg";

const altTextForDarkMode =
  "Icon of sun by pressing on which you can turn application to light mode.";

const altTextForLightMode =
  "Icon of moon by pressing on which you can turn application to dark mode.";

export function useReturnThemeModeRelatedInfo(context: ThemeModeContextType) {
  let themeModeLabel: "Light" | "Dark";
  let themeModeIconSource: string;
  let themeModeAltText: string;
  let appNameClass: string;

  if (typeof context === "string") {
    themeModeLabel = "Light";
    themeModeIconSource = IconToTurnDarkMode;
    themeModeAltText = altTextForLightMode;
    appNameClass = "header__app-name--light-mode";
  } else {
    themeModeLabel = context.themeMode === "light" ? "Light" : "Dark";

    themeModeIconSource =
      context.themeMode === "light" ? IconToTurnDarkMode : IconToTurnLightMode;

    themeModeAltText =
      context.themeMode === "light" ? altTextForLightMode : altTextForDarkMode;

    appNameClass =
      context.themeMode === "light"
        ? "header__app-name--light-mode"
        : "header__app-name--dark-mode";
  }

  return {
    themeModeLabel,
    themeModeIconSource,
    themeModeAltText,
    appNameClass,
  };
}
