import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [IsDarkMode, SetIsDarkMode] = useState(false);

  useEffect(() => {
    const StoredTheme = localStorage.getItem("Theme");
    if (StoredTheme) {
      SetIsDarkMode(StoredTheme === "Dark");
    } else {
      SetIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const ToggleTheme = () => {
    SetIsDarkMode(!IsDarkMode);
    localStorage.setItem("Theme", !IsDarkMode ? "Dark" : "Light");
  };

  return (
    <ThemeContext.Provider value={{ IsDarkMode, ToggleTheme }}>
      <div className={`Global ${IsDarkMode ? "Dark" : "Light"}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function UseTheme() {
  return useContext(ThemeContext);
}
