import "./DeveloperGeneralInfo.scss";

import { getClassBasedOnThemeModeContext } from "../../helpers/helper-functions";

import { useThemeModeContext } from "../../hooks/useThemeModeContext";

import { DeveloperGeneralInfoProps } from "../../types/componentProps";

//------ COMPONENT: START ------ //

const transformDateTime = new Intl.DateTimeFormat("en-UK", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export default function DeveloperGeneralInfo(props: DeveloperGeneralInfoProps) {
  const themeModeContext = useThemeModeContext();

  const developerName: string = props.name || "Unknown name";

  const developerBio: string = props.bio || "This profile has no bio...";

  const accountCreationDateTime = transformDateTime.format(
    new Date(props.created)
  );

  const nameClass = getClassBasedOnThemeModeContext(
    themeModeContext,
    "developer-general-info__name"
  );

  return (
    <span className="developer-general-info">
      <p className={nameClass}>{developerName}</p>
      <p className="developer-general-info__login">@{props.login}</p>
      <p className="developer-general-info__join-date">
        Joined {accountCreationDateTime}
      </p>
      <p className="developer-general-info__bio">{developerBio}</p>
    </span>
  );
}

//------ COMPONENT: END ------ //
