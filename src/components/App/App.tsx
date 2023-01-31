import "./App.scss";

import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar";
import DeveloperCard from "../DeveloperCard/DeveloperCard";

import { fetchGithubUserBySearchQuery } from "./helpers";

import { useState } from "react";
import { useGetCSSClassBasedOnThemeModeContext } from "../../hooks/useGetCSSClassBasedOnThemeMode";

import { SearchButtonClickHandler } from "../../types/SearchButtonClickHandler";
import { SearchResult } from "../../types/SearchResult";

// ------ COMPONENT: START ------ //

export default function App() {
  const [searchResult, setSearchResult] = useState<SearchResult>("startup");

  const handleSearchButtonClick: SearchButtonClickHandler = (
    searchQuery,
    setSearchQuery
  ) => {
    fetchGithubUserBySearchQuery(searchQuery, setSearchResult, setSearchQuery);
  };

  let appClass = useGetCSSClassBasedOnThemeModeContext("app");

  return (
    <div className={appClass}>
      <Header />
      <Searchbar handleSearchButtonClick={handleSearchButtonClick} />

      {searchResult === "startup" && <DeveloperCard searchStatus={"startup"} />}

      {searchResult === "empty" && <DeveloperCard searchStatus={"empty"} />}

      {typeof searchResult === "object" && (
        <DeveloperCard searchStatus={"match"} githubUserInfo={searchResult} />
      )}
    </div>
  );
}

// ------ COMPONENT: END ------ //
