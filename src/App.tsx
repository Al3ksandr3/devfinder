import "./App.scss";

import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar";

import { getClassBasedOnThemeModeContext } from "./helpers/helper-functions";

import { useThemeModeContext } from "./hooks/useThemeModeContext";

// ------ COMPONENT: START ------ //

export default function App() {
  const themeModeContext = useThemeModeContext();

  let appClass = getClassBasedOnThemeModeContext(themeModeContext, "app");

  return (
    <div className={appClass}>
      <Header />
      <Searchbar />
    </div>
  );
}

// ------ COMPONENT: END ------ //
