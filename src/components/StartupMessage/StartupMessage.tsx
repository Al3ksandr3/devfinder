import "./StartupMessage.scss";

import githubIconForLightMode from "./assets/github-icon--light-mode.svg";
import githubIconForDarkMode from "./assets/github-icon--dark-mode.svg";

import { useGetCSSClassBasedOnThemeModeContext } from "../../hooks/useGetCSSClassBasedOnThemeMode";
import { useGetIconBasedOnThemeMode } from "../../hooks/useGetIconBasedOnThemeMode";

//------ COMPONENT: START ------ //

export default function StartupMessage() {
  const startupMessageIcon = useGetIconBasedOnThemeMode(
    githubIconForLightMode,
    githubIconForDarkMode
  );

  const messageTextClass = useGetCSSClassBasedOnThemeModeContext(
    "startup-message__message-text"
  );

  return (
    <span className="startup-message">
      <img
        className="startup-message__icon"
        src={startupMessageIcon}
        alt="GitHub logo."
      />
      <p className={messageTextClass}>
        Input GitHub user name in the field above and press "Search" button to
        proceed...
      </p>
    </span>
  );
}

//------ COMPONENT: END ------ //
