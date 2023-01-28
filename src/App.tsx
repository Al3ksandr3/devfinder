import "./App.scss";

import Header from "./components/Header/Header";

import { ThemeModeContext } from "./Root";
import { useContext } from "react";

// ------ COMPONENT: START ------ //

export default function App() {
  const context = useContext(ThemeModeContext);

  let appClass: string;

  if (typeof context === "string") {
    appClass = `app_${context}-mode`;
  } else {
    appClass =
      context.themeMode === "light" ? "app--light-mode" : "app--dark-mode";
  }

  return (
    <div className={appClass}>
      <Header />
    </div>
  );
}

// ------ COMPONENT: END ------ //
