import App from "./App";

import { useReducer, createContext } from "react";

// Context and Reducer setup

function reducer(
  state: "light" | "dark",
  action: { payload: "light" | "dark" }
) {
  return action.payload;
}

export type ThemeModeContextType =
  | string
  | {
      themeMode: string;
      dispatchThemeMode: (value: { payload: "light" | "dark" }) => void;
    };

export const ThemeModeContext = createContext<ThemeModeContextType>("light");

// ------ COMPONENT: START ------ //

export default function Root() {
  const [themeMode, dispatchThemeMode] = useReducer(reducer, "light");

  return (
    <ThemeModeContext.Provider value={{ themeMode, dispatchThemeMode }}>
      <App />
    </ThemeModeContext.Provider>
  );
}

// ------ COMPONENT: END  ------ //
