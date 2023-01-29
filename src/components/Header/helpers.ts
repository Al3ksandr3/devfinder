import { ThemeModeContextType } from "../../types/themeMode";

import IconToTurnLightMode from "./assets/icon-light-mode.svg";
import IconToTurnDarkMode from "./assets/icon-dark-mode.svg";

const altTextForDarkMode =
  "Icon of sun by pressing on which you can turn application to light mode.";

const altTextForLightMode =
  "Icon of moon by pressing on which you can turn application to dark mode.";

// ------ HOOK: START ------ //

export function useReturnThemeModeRelatedInfo(context: ThemeModeContextType) {
  let themeModeLabel: "Light" | "Dark";
  let themeModeIconSource: string;
  let themeModeAltText: string;

  if (typeof context === "string") {
    themeModeLabel = "Dark";
    themeModeIconSource = IconToTurnDarkMode;
    themeModeAltText = altTextForLightMode;
  } else {
    themeModeLabel = context.themeMode === "light" ? "Dark" : "Light";

    themeModeIconSource =
      context.themeMode === "light" ? IconToTurnDarkMode : IconToTurnLightMode;

    themeModeAltText =
      context.themeMode === "light" ? altTextForLightMode : altTextForDarkMode;
  }

  return {
    themeModeLabel,
    themeModeIconSource,
    themeModeAltText,
  };
}

// ------ HOOK: END ------ //
