import "./DeveloperCard.scss";

import StartupMessage from "../StartupMessage/StartupMessage";

import { getClassBasedOnThemeModeContext } from "../../helpers/helper-functions";

import { useThemeModeContext } from "../../hooks/useThemeModeContext";

import { LocalGithubUser } from "../../types/GithubAPI";
import EmptySearchResult from "../EmptySearchResult/EmptySearchResult";

// ------ Types ------ //

interface DeveloperCardProps {
  searchStatus: "startup" | "empty" | "match";
  githubUserInfo?: LocalGithubUser;
}

//------ COMPONENT: START ------ //

export default function DeveloperCard(props: DeveloperCardProps) {
  const themeModeContext = useThemeModeContext();

  const developerCardClass = getClassBasedOnThemeModeContext(
    themeModeContext,
    "developer-card"
  );

  return (
    <section className={developerCardClass}>
      {/* CASE I - display initial hint during the startup...  */}

      {props.searchStatus === "startup" && <StartupMessage />}

      {/* CASE II - display empty search result message...  */}

      {props.searchStatus === "empty" && <EmptySearchResult />}

      {/* CASE III - display search result if user with specified name was found...  */}

      {props.searchStatus === "match" &&
        typeof props.githubUserInfo === "object" && (
          <section className="developer-card__developer-info">
            <img
              className="developer-card__developer-info__avatar"
              src={props.githubUserInfo.avatar}
              alt="Avatar of a developer."
            />
            <section className="developer-card__developer-info__info-container"></section>
          </section>
        )}
    </section>
  );
}

//------ COMPONENT: END ------ //
