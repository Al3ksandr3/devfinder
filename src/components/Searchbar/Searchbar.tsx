import "./Searchbar.scss";

import { LocalGithubUser } from "../../types/user";

import SearchIcon from "./assets/icon-search.svg";

import { fetchGithubUserBySearchQuery } from "./helpers";
import { getClassBasedOnThemeModeContext } from "../../helpers/helper-functions";

import { useState } from "react";
import { useThemeModeContext } from "../../hooks/useThemeModeContext";

const altTextForSearchbar =
  "Magnifying glass icon that is commonly used to point out the searching functionality of some field.";

//------ COMPONENT: START ------ //

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const [searchResult, setSearchResult] = useState<
    null | "no result" | LocalGithubUser
  >(null);

  const themeModeContext = useThemeModeContext();

  const searchbarClass = getClassBasedOnThemeModeContext(
    themeModeContext,
    "searchbar"
  );

  const searchFieldClass = getClassBasedOnThemeModeContext(
    themeModeContext,
    "searchbar__search-field"
  );

  const handleSearchFieldChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchQuery(event.target.value);
  };

  function handleSearchButtonClick() {
    fetchGithubUserBySearchQuery(searchQuery, setSearchResult, setSearchQuery);
  }

  return (
    <section className={searchbarClass}>
      <img
        className="searchbar__icon"
        src={SearchIcon}
        alt={altTextForSearchbar}
      />
      <input
        type="text"
        onChange={handleSearchFieldChange}
        value={searchQuery}
        className={searchFieldClass}
        placeholder="Search GitHub username..."
      />
      <button
        className="searchbar__search-button"
        onClick={handleSearchButtonClick}
      >
        Search
      </button>
    </section>
  );
}

//------ COMPONENT: END ------ //
