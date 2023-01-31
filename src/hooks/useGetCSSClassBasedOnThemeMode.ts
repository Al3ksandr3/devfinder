import { useThemeModeContext } from "./useThemeModeContext";

// ------ HOOK: START ------ //

export function useGetCSSClassBasedOnThemeModeContext(
  baseForClassName: string
): string {
  const themeModeContext = useThemeModeContext();

  let CSSClassBasedOnMode: string;

  if (typeof themeModeContext === "string") {
    CSSClassBasedOnMode = `${baseForClassName}--light-mode`;
  } else {
    CSSClassBasedOnMode = `${baseForClassName}--${themeModeContext.themeMode}-mode`;
  }

  return CSSClassBasedOnMode;
}

// ------ HOOK: END ------ //
