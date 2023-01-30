import {
  DeveloperContactInfoItemProps,
  DeveloperCardProps,
} from "../../types/componentProps";

import assetsDB from "./assetsDB";

export function getDeveloperContactInfoItems(
  developerInfo: DeveloperCardProps["githubUserInfo"]
): DeveloperContactInfoItemProps[] {
  if (!developerInfo) return [];

  return [
    {
      itemContent: developerInfo.location,
      itemIconUrl: {
        forLightMode: assetsDB.locationIconLightMode,
        forDarkMode: assetsDB.locationIconDarkMode,
      },
    },
    {
      itemContent: developerInfo.company,
      itemIconUrl: {
        forLightMode: assetsDB.companyIconLightMode,
        forDarkMode: assetsDB.companyIconDarkMode,
      },
    },
    {
      itemContent: developerInfo.blog,
      isLink: developerInfo.blog ? true : false,
      itemIconUrl: {
        forLightMode: assetsDB.websiteIconLightMode,
        forDarkMode: assetsDB.websiteIconDarkMode,
      },
    },
    {
      itemContent: developerInfo.twitter,
      isLink: developerInfo.twitter ? true : false,
      itemIconUrl: {
        forLightMode: assetsDB.twitterIconLightMode,
        forDarkMode: assetsDB.twitterIconDarkMode,
      },
    },
  ];
}
