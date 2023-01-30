import "./DeveloperContactInfoItem.scss";

import {
  getIconBasedOnThemeModeContext,
  getClassBasedOnThemeModeContext,
} from "../../helpers/helper-functions";

import { useThemeModeContext } from "../../hooks/useThemeModeContext";

import { DeveloperContactInfoItemProps } from "../../types/componentProps";

//------ COMPONENT: START ------ //

export default function DeveloperContactInfoItem(
  props: DeveloperContactInfoItemProps
) {
  const themeModeContext = useThemeModeContext();

  const itemContent = props.itemContent || "Not available...";

  const contactInfoItemIcon = getIconBasedOnThemeModeContext(
    themeModeContext,
    props.itemIconUrl.forLightMode,
    props.itemIconUrl.forDarkMode
  );

  const contactInfoItemClass = getClassBasedOnThemeModeContext(
    themeModeContext,
    "developer-contact-info-item"
  );

  const linkClass = getClassBasedOnThemeModeContext(
    themeModeContext,
    "developer-contact-info-item__link"
  );

  return (
    <span className={contactInfoItemClass}>
      <img
        className="developer-contact-info-item__icon"
        src={contactInfoItemIcon}
      />

      {props.isLink ? (
        <a
          className={linkClass}
          href={itemContent}
          target="_blank"
          rel="noreferrer"
        >
          {itemContent}
        </a>
      ) : (
        <p className="developer-contact-info-item__item-content">
          {itemContent}
        </p>
      )}
    </span>
  );
}

//------ COMPONENT: END ------ //
