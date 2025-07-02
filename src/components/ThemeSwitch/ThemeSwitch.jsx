import React from "react";

import dayMode from "/dayMode.png";
import nightMode from "/nightMode.png";
import { useTheme } from "../../contexts/ThemeContext";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="">
      <div onClick={toggleTheme}>
        {theme === "light" ? (
          <img src={dayMode} alt="day mode" className="w-8 h-auto" />
        ) : (
          <img src={nightMode} alt="night mode" className="w-8 h-auto" />
        )}
      </div>
    </div>
  );
}

export default ThemeSwitch;
