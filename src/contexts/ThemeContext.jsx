// import { createContext, useContext, useState, useEffect } from "react";

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("");

//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";

//     setTheme(saved || systemPref);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className={theme}>{children}</div>
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   return useContext(ThemeContext);
// }

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  //use "light" as initial fallback to avoid empty className
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    // Ensure a valid theme is applied
    setTheme(saved || systemPref);
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    // Only apply the theme class if theme is not empty
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme ? theme : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
