import "./Searchbar.scss";

import SearchIcon from "./assets/icon-search.svg";

import { getClassBasedOnThemeModeContext } from "../../helpers/helper-functions";

import { useThemeModeContext } from "../../hooks/useThemeModeContext";

const altTextForSearchbar =
  "Magnifying glass icon that is commonly used to point out the searching functionality of some field.";

//------ COMPONENT: START ------ //

export default function Searchbar() {
  const themeModeContext = useThemeModeContext();

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
        className={searchFieldClass}
        placeholder="Search GitHub username..."
      />
      <button className="searchbar__search-button">Search</button>
    </section>
  );
}

//------ COMPONENT: END ------ //
