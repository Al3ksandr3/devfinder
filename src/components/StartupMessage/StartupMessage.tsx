import "./StartupMessage.scss";

import githubIconForLightMode from "./assets/icon-github--light-mode.svg";
import githubIconForDarkMode from "./assets/icon-github--dark-mode.svg";

import {
  getIconBasedOnThemeModeContext,
  getClassBasedOnThemeModeContext,
} from "../../helpers/helper-functions";

import { useThemeModeContext } from "../../hooks/useThemeModeContext";

//------ COMPONENT: START ------ //

export default function StartupMessage() {
  const themeModeContext = useThemeModeContext();

  const startupMessageIcon = getIconBasedOnThemeModeContext(
    themeModeContext,
    githubIconForLightMode,
    githubIconForDarkMode
  );

  const messageTextClass = getClassBasedOnThemeModeContext(
    themeModeContext,
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
        Input GitHub user name in the fild above and press "Saarch" button to
        proceed...
      </p>
    </span>
  );
}

//------ COMPONENT: END ------ //
