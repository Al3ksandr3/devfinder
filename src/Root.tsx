import App from "./components/App/App";

import { useReducer, createContext } from "react";

import { ThemeModeContextType } from "./types/themeMode";

// Context and Reducer setup

function reducer(
  state: "light" | "dark",
  action: { payload: "light" | "dark" }
) {
  return action.payload;
}

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
