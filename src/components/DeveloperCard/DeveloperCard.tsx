import "./DeveloperCard.scss";

import StartupMessage from "../StartupMessage/StartupMessage";
import EmptySearchResult from "../EmptySearchResult/EmptySearchResult";
import DeveloperGeneralInfo from "../DeveloperGeneralInfo/DeveloperGeneralInfo";
import DeveloperStatsItem from "../DeveloperStatsItem/DeveloperStatsItem";
import DeveloperContactInfoItem from "../DeveloperContactInfoItem/DeveloperContactInfoItem";

import { getClassBasedOnThemeModeContext } from "../../helpers/helper-functions";
import { getDeveloperContactInfoItems } from "./helpers";

import { useThemeModeContext } from "../../hooks/useThemeModeContext";

import {
  DeveloperCardProps,
  DeveloperContactInfoItemProps,
} from "../../types/componentProps";

//------ COMPONENT: START ------ //

export default function DeveloperCard(props: DeveloperCardProps) {
  const themeModeContext = useThemeModeContext();

  const developerCardClass = getClassBasedOnThemeModeContext(
    themeModeContext,
    "developer-card"
  );

  let developerContactInfoItems: DeveloperContactInfoItemProps[] =
    getDeveloperContactInfoItems(props.githubUserInfo);

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
            <article className="developer-card__developer-info__info-container">
              <DeveloperGeneralInfo
                login={props.githubUserInfo.login}
                bio={props.githubUserInfo.bio}
                name={props.githubUserInfo.name}
                created={props.githubUserInfo.created}
              />
              <span className="developer-card__developer-info__info-container__contacts">
                {developerContactInfoItems.map((contactInfoItem) => {
                  return (
                    <DeveloperContactInfoItem
                      key={contactInfoItem.itemIconUrl.forLightMode}
                      itemContent={contactInfoItem.itemContent}
                      isLink={contactInfoItem.isLink}
                      itemIconUrl={contactInfoItem.itemIconUrl}
                    />
                  );
                })}
              </span>
            </article>
          </section>
        )}
    </section>
  );
}

//------ COMPONENT: END ------ //
