import "./App.scss";

import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar";
import DeveloperCard from "../DeveloperCard/DeveloperCard";

import { fetchGithubUserBySearchQuery } from "./helpers";
import { getClassBasedOnThemeModeContext } from "../../helpers/helper-functions";

import { useState } from "react";
import { useThemeModeContext } from "../../hooks/useThemeModeContext";

import { SearchButtonClickHandler } from "../../types/SearchButtonClickHandler";
import { LocalGithubUser } from "../../types/user";

// ------ COMPONENT: START ------ //

export default function App() {
  const themeModeContext = useThemeModeContext();

  const [searchResult, setSearchResult] = useState<
    null | "no result" | LocalGithubUser
  >(null);

  const handleSearchButtonClick: SearchButtonClickHandler = (
    searchQuery,
    setSearchQuery
  ) => {
    fetchGithubUserBySearchQuery(searchQuery, setSearchResult, setSearchQuery);
  };

  let appClass = getClassBasedOnThemeModeContext(themeModeContext, "app");

  return (
    <div className={appClass}>
      <Header />
      <Searchbar handleSearchButtonClick={handleSearchButtonClick} />
      {/* <DeveloperCard /> */}
    </div>
  );
}

// ------ COMPONENT: END ------ //
