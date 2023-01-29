import { ThemeModeContext } from "../../types/ThemeModeContext";

import modeSwitchIconForLightMode from "./assets/icon-moon--light-mode.svg";
import modeSwitchIconForDarkMode from "./assets/icon-sun--dark-mode.svg";

import { getIconBasedOnThemeModeContext } from "../../helpers/helper-functions";

const altTextForDarkMode =
  "Icon of sun by pressing on which you can turn application to light mode.";

const altTextForLightMode =
  "Icon of moon by pressing on which you can turn application to dark mode.";

// ------ HOOK: START ------ //

export function useReturnThemeModeRelatedInfo(
  themeModeContext: ThemeModeContext
) {
  let themeModeLabel: "Light" | "Dark";
  let themeModeIconSource: string = getIconBasedOnThemeModeContext(
    themeModeContext,
    modeSwitchIconForLightMode,
    modeSwitchIconForDarkMode
  );
  let themeModeAltText: string;

  if (typeof themeModeContext === "string") {
    themeModeLabel = "Dark";

    themeModeAltText = altTextForLightMode;
  } else {
    themeModeLabel = themeModeContext.themeMode === "light" ? "Dark" : "Light";

    themeModeAltText =
      themeModeContext.themeMode === "light"
        ? altTextForLightMode
        : altTextForDarkMode;
  }

  return {
    themeModeLabel,
    themeModeIconSource,
    themeModeAltText,
  };
}

// ------ HOOK: END ------ //
