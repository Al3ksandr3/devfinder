export type ThemeModeContext =
  | string
  | {
      themeMode: "light" | "dark";
      dispatchThemeMode: (value: { payload: "light" | "dark" }) => void;
    };
