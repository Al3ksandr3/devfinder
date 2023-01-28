export type ThemeModeContextType =
  | string
  | {
      themeMode: string;
      dispatchThemeMode: (value: { payload: "light" | "dark" }) => void;
    };
