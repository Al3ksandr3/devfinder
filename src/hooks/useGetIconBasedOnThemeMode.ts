import { useThemeModeContext } from "../hooks/useThemeModeContext";

// ------ HOOK: START ------ //

export function useGetIconBasedOnThemeMode(
  iconForLightMode: string,
  iconForDarkMode: string
): string {
  const themeModeContext = useThemeModeContext();

  let iconBasedOnMode: string;

  if (typeof themeModeContext === "string") {
    iconBasedOnMode = iconForLightMode;
  } else {
    iconBasedOnMode =
      themeModeContext.themeMode === "light"
        ? iconForLightMode
        : iconForDarkMode;
  }

  return iconBasedOnMode;
}

// ------ HOOK: END ------ //
