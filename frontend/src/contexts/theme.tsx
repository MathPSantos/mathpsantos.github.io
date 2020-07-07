import React, { useEffect } from "react";
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from '../hooks/usePersistedState';

import { LightTheme, DarkTheme } from '../styles/theme';

type Theme = any;
type ThemeContext = { theme: Theme, toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
    {} as ThemeContext
);

export const ThemeContextProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', DarkTheme);

    // const changeMetaColor = (color: string) => {
    //     var metaThemeColor = document.querySelector("meta[name=theme-color]");
    //     metaThemeColor?.setAttribute("content", color);
    // };

    const toggleTheme = () => setTheme(theme === LightTheme ? DarkTheme : LightTheme)

    // useEffect(() => {
    //     const storagedTheme = localStorage.getItem('theme');

    //     if (storagedTheme) {
    //         setTheme(JSON.parse(storagedTheme));
    //         changeMetaColor(theme.colors.background.tertiary);
    //     };

    //     return;
    // }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
