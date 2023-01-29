import { ThemeMode } from "../Root";
import { ThemeModeContext } from "../types/ThemeModeContext";

import { useContext } from "react";

// ------ HOOK: START ------ //

export function useThemeModeContext(): ThemeModeContext {
  return useContext(ThemeMode);
}

// ------ HOOK: END ------ //
