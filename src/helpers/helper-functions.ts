import { ThemeModeContextType } from "../types/themeMode";

export function getClassBasedOnThemeModeContext(
  themeModeContext: ThemeModeContextType,
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
