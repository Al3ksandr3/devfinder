import "./DeveloperContactInfoItem.scss";

import { getIconBasedOnThemeModeContext } from "../../helpers/helper-functions";

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

  return (
    <span className="developer-contact-info-item">
      <img className="" src={contactInfoItemIcon} />

      {props.isLink ? (
        <a
          className="developer-contact-info-item__link"
          href={itemContent}
          target="_blank"
          rel="noreferrer"
        >
          {itemContent}
        </a>
      ) : (
        <p className="developer-contact-info-item__item-name">{itemContent}</p>
      )}
    </span>
  );
}

//------ COMPONENT: END ------ //
