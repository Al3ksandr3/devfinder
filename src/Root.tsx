import App from "./components/App/App";

import { useReducer, createContext } from "react";

import { ThemeModeContext } from "./types/ThemeModeContext";

// Context and Reducer setup

function reducer(
  state: "light" | "dark",
  action: { payload: "light" | "dark" }
) {
  return action.payload;
}

export const ThemeMode = createContext<ThemeModeContext>("light");

// ------ COMPONENT: START ------ //

export default function Root() {
  const [themeMode, dispatchThemeMode] = useReducer(reducer, "light");

  return (
    <ThemeMode.Provider value={{ themeMode, dispatchThemeMode }}>
      <App />
    </ThemeMode.Provider>
  );
}

// ------ COMPONENT: END  ------ //
