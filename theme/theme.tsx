import React, { SetStateAction, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { light } from "./light";
import { dark } from "./dark";
import { Dispatch } from "react";


export interface Theme {
  background: string,
  primary: string,
  primary2: string,
  secondary: string,
  text: string,
  dark: boolean
}

export const themes = {
  light,
  dark,
};

export type ThemeName = keyof typeof themes;


export interface ThemeContextInterface {
  theme: ThemeName,
  setTheme: Dispatch<SetStateAction<ThemeName>>
}

export const ThemeContext = React.createContext<ThemeContextInterface | null>(null);

export const ThemeProvider: React.FC = ({ children }) => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState<keyof typeof themes>(scheme ?? "light");

  // this is where you can load some user data

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext)!;

  switch (theme) {
    case 'dark':
      return {
        theme: themes.dark,
        setTheme
      };
    case 'light':
      return {
        theme: themes.light,
        setTheme
      };
  }
}