import "./DeveloperCard.scss";

import { getClassBasedOnThemeModeContext } from "../../helpers/helper-functions";

import { useThemeModeContext } from "../../hooks/useThemeModeContext";

// ------ Types ------ //

interface DeveloperCardProps {
  avatarUrl?: string;
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
      <img
        className="developer-card__avatar"
        src={props.avatarUrl}
        alt="Avatar of a developer."
      />
    </section>
  );
}

//------ COMPONENT: END ------ //
