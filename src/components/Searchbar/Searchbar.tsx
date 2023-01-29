import "./Searchbar.scss";

import SearchIcon from "./assets/icon-search.svg";

import { getClassBasedOnThemeModeContext } from "../../helpers/helper-functions";

import { useState } from "react";
import { useThemeModeContext } from "../../hooks/useThemeModeContext";

import { SearchButtonClickHandler } from "../../types/SearchButtonClickHandler";

const altTextForSearchbar =
  "Magnifying glass icon that is commonly used to point out the searching functionality of some field.";

// ------ Types ------ //

interface SearchbarProps {
  handleSearchButtonClick: SearchButtonClickHandler;
}

//------ COMPONENT: START ------ //

export default function Searchbar(props: SearchbarProps) {
  const themeModeContext = useThemeModeContext();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchFieldChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchQuery(event.target.value);
  };

  const searchbarClass = getClassBasedOnThemeModeContext(
    themeModeContext,
    "searchbar"
  );

  const searchFieldClass = getClassBasedOnThemeModeContext(
    themeModeContext,
    "searchbar__search-field"
  );

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
        onClick={props.handleSearchButtonClick.bind(
          null,
          searchQuery,
          setSearchQuery
        )}
      >
        Search
      </button>
    </section>
  );
}

//------ COMPONENT: END ------ //
