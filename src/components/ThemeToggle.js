import React from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

function ThemeToggle({ theme, onToggle }) {
  const isWarmTheme = theme === "warm";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isWarmTheme ? "night" : "warm"} theme`}
      title={`Switch to ${isWarmTheme ? "night" : "warm"} theme`}
    >
      <span className="theme-toggle__icon">
        {isWarmTheme ? <BsMoonStarsFill /> : <BsSunFill />}
      </span>
    </button>
  );
}

export default ThemeToggle;
