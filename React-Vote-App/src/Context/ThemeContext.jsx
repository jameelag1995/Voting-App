import { createContext, useState } from "react";

export const ThemeContext = createContext({ darkTheme: false });

export default function ThemeContextProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);
    function handleThemeSwitch() {
        setDarkTheme((prev) => !prev);
    }
    const themeContextValues = {
        darkTheme,
    };
    return (
        <ThemeContext.Provider value={themeContextValues}>
            <button id="theme-switch" className={darkTheme ? 'dark' : ''} onClick={handleThemeSwitch}>
                {darkTheme ? "Dark-Mode" : "Light-Mode"}
            </button>
            {children}
        </ThemeContext.Provider>
    );
}
