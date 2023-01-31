import "./Searchbar.scss";

import SearchIcon from "./assets/icon-search.svg";

import { useState, useRef } from "react";
import { useGetCSSClassBasedOnThemeModeContext } from "../../hooks/useGetCSSClassBasedOnThemeMode";

import { SearchButtonClickHandler } from "../../types/SearchButtonClickHandler";

const altTextForSearchbar =
  "Magnifying glass icon that is commonly used to point out the searching functionality of some field.";

// ------ Types ------ //

interface SearchbarProps {
  handleSearchButtonClick: SearchButtonClickHandler;
}

//------ COMPONENT: START ------ //

export default function Searchbar(props: SearchbarProps) {
  const inputElementRef = useRef<null | HTMLInputElement>(null);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchFieldChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchQuery(event.target.value);
  };

  const searchbarClass = useGetCSSClassBasedOnThemeModeContext("searchbar");

  const searchFieldClass = useGetCSSClassBasedOnThemeModeContext(
    "searchbar__search-field"
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = function (
    submitE
  ) {
    submitE.preventDefault();

    if (searchQuery.trim() === "") {
      setSearchQuery("");

      return inputElementRef.current ? inputElementRef.current.focus() : null;
    }

    props.handleSearchButtonClick(searchQuery.trim(), setSearchQuery);
  };

  return (
    <form className={searchbarClass} onSubmit={handleSubmit}>
      <img
        className="searchbar__icon"
        src={SearchIcon}
        alt={altTextForSearchbar}
      />
      <input
        type="text"
        ref={inputElementRef}
        onChange={handleSearchFieldChange}
        value={searchQuery}
        className={searchFieldClass}
        placeholder="Search GitHub username..."
      />
      <button className="searchbar__search-button">Search</button>
    </form>
  );
}

//------ COMPONENT: END ------ //
