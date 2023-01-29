import { User, GithubError, LocalGithubUser } from "../../types/user";

export async function fetchGithubUserBySearchQuery(
  searchQuery: string,
  searchResultStateSetter: (
    newState:
      | "no result"
      | LocalGithubUser
      | null
      | ((
          prevState: "no result" | LocalGithubUser | null
        ) => "no result" | LocalGithubUser | null)
  ) => void,
  searchQueryStateSetter: (
    value: string | ((prevValue: string) => string)
  ) => void
) {
  searchQueryStateSetter("");

  try {
    const response = await fetch(`https://api.github.com/users/${searchQuery}`);

    const responseData: User | GithubError = await response.json();
    if ("login" in responseData) {
      const remapedUserData: LocalGithubUser = {
        avatar: responseData.avatar_url,
        bio: responseData.bio,
        blog: responseData.blog,
        company: responseData.company,
        created: responseData.created_at,
        followers: responseData.followers,
        following: responseData.following,
        id: responseData.id,
        location: responseData.location,
        login: responseData.login,
        name: responseData.name,
        repos: responseData.public_repos,
        twitter: responseData.twitter_username,
        url: responseData.url,
      };

      searchResultStateSetter(remapedUserData);
    } else {
      searchResultStateSetter("no result");
    }
  } catch (error) {
    searchResultStateSetter("no result");
  }
}
