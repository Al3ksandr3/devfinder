import { ThemeModeContext } from "../../types/ThemeModeContext";

import modeIconForLightMode from "./assets/mode-icon--light-mode.svg";
import modeIconForDarkMode from "./assets/mode-icon--dark-mode.svg";

import { useGetIconBasedOnThemeMode } from "../../hooks/useGetIconBasedOnThemeMode";

const altTextForDarkMode =
  "Icon of sun by pressing on which you can turn application to light mode.";

const altTextForLightMode =
  "Icon of moon by pressing on which you can turn application to dark mode.";

// ------ HOOK: START ------ //

export function useReturnThemeModeRelatedInfo(
  themeModeContext: ThemeModeContext
) {
  let themeModeLabel: "Light" | "Dark";
  let themeModeIconSource: string = useGetIconBasedOnThemeMode(
    modeIconForLightMode,
    modeIconForDarkMode
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
