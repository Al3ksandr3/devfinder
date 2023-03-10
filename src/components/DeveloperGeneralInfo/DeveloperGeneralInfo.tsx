import "./DeveloperGeneralInfo.scss";

import { useGetCSSClassBasedOnThemeModeContext } from "../../hooks/useGetCSSClassBasedOnThemeMode";

import { DeveloperGeneralInfoProps } from "../../types/componentProps";

//------ COMPONENT: START ------ //

const transformDateTime = new Intl.DateTimeFormat("en-UK", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export default function DeveloperGeneralInfo(props: DeveloperGeneralInfoProps) {
  const developerName: string = props.name || "Unknown name";

  const developerBio: string = props.bio || "This profile has no bio...";

  const accountCreationDateTime = transformDateTime.format(
    new Date(props.created)
  );

  const nameClass = useGetCSSClassBasedOnThemeModeContext(
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
