import "./DeveloperCard.scss";

import StartupMessage from "../StartupMessage/StartupMessage";

import { getClassBasedOnThemeModeContext } from "../../helpers/helper-functions";

import { useThemeModeContext } from "../../hooks/useThemeModeContext";

import { LocalGithubUser } from "../../types/user";

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

      {props.searchStatus === "empty" && (
        <p className="developer-card__empty-result"></p>
      )}

      {/* CASE III - display search result...  */}

      {props.searchStatus === "match" &&
        typeof props.githubUserInfo === "object" && (
          <img
            className="developer-card__avatar"
            src={props.githubUserInfo.avatar}
            alt="Avatar of a developer."
          />
        )}
    </section>
  );
}

//------ COMPONENT: END ------ //
