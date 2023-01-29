import { ThemeModeContext } from "../types/ThemeModeContext";

export function getClassBasedOnThemeModeContext(
  themeModeContext: ThemeModeContext,
  baseForClassName: string
): string {
  let CSSClassBasedOnMode: string;

  if (typeof themeModeContext === "string") {
    CSSClassBasedOnMode = `${baseForClassName}--light-mode`;
  } else {
    CSSClassBasedOnMode =
      themeModeContext.themeMode === "light"
        ? `${baseForClassName}--light-mode`
        : `${baseForClassName}--dark-mode`;
  }

  return CSSClassBasedOnMode;
}

////////////////////////////////////////////////////////

export function getIconBasedOnThemeModeContext(
  themeModeContext: ThemeModeContext,
  iconForLightMode: string,
  iconForDarkMode: string
): string {
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
