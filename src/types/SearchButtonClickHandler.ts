export type SearchButtonClickHandler = (
  searchQuery: string,
  setSearchQuery: (value: string | ((prevValue: string) => string)) => void
) => void;
