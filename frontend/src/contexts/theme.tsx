import React from "react";
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from '../hooks/usePersistedState';

import { LightTheme, DarkTheme } from '../styles/theme';

type Theme = any;
type ThemeContext = { theme: Theme, toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
    {} as ThemeContext
);

export const ThemeContextProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', LightTheme);

    const toggleTheme = () => {
        setTheme(theme === LightTheme ? DarkTheme : LightTheme)
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
