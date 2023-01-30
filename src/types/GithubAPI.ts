export interface User {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GithubError {
  message: string;
  documentation_url: string;
}

export interface LocalGithubUser {
  login: string;
  id: number;
  avatar: string;
  url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  bio: string | null;
  twitter: string | null;
  repos: number;
  followers: number;
  following: number;
  created: string;
}
