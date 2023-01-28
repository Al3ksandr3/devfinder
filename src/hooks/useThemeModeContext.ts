import { ThemeModeContext } from "../Root";
import { ThemeModeContextType } from "../types/themeMode";

import { useContext } from "react";

// ------ HOOK: START ------ //

export function useThemeModeContext(): ThemeModeContextType {
  return useContext(ThemeModeContext);
}

// ------ HOOK: END ------ //
