import "./DeveloperContactInfoItem.scss";

import { useGetCSSClassBasedOnThemeModeContext } from "../../hooks/useGetCSSClassBasedOnThemeMode";
import { useGetIconBasedOnThemeMode } from "../../hooks/useGetIconBasedOnThemeMode";

import { DeveloperContactInfoItemProps } from "../../types/componentProps";

//------ COMPONENT: START ------ //

export default function DeveloperContactInfoItem(
  props: DeveloperContactInfoItemProps
) {
  const itemContent = props.itemContent || "Not available...";

  const contactInfoItemIcon = useGetIconBasedOnThemeMode(
    props.itemIconUrl.forLightMode,
    props.itemIconUrl.forDarkMode
  );

  const contactInfoItemClass = useGetCSSClassBasedOnThemeModeContext(
    "developer-contact-info-item"
  );

  const linkClass = useGetCSSClassBasedOnThemeModeContext(
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
