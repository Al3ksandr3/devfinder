import { LocalGithubUser } from "./GithubAPI";

export interface DeveloperCardProps {
  searchStatus: "startup" | "empty" | "match";
  githubUserInfo?: LocalGithubUser;
}

export interface DeveloperGeneralInfoProps
  extends Pick<LocalGithubUser, "login" | "created" | "bio" | "name"> {}

export interface DeveloperContactInfoItemProps {
  itemContent: string | null;
  isLink?: boolean;
  itemIconUrl: { forLightMode: string; forDarkMode: string };
}

export interface DeveloperStatsItemProps {
  statName: string;
  statValue: number;
}
