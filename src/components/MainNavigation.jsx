import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as LightMoon } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme.jsx";
export default function MainNavigation() {
  const { theme, setTheme } = useContext(ThemeContext);

  let themeState = theme;

  function handleThemeChange() {
    setTheme(theme === "dark theme" ? "light theme" : "dark theme");
  }

  if (theme === "light theme") {
    themeState = (
      <FontAwesomeIcon
        icon={LightMoon}
        style={{ color: "black" }}
        transform={{ rotate: "330" }}
        onClick={handleThemeChange}
      />
    );
  } else {
    themeState = (
      <FontAwesomeIcon
        icon={faMoon}
        style={{ color: "#ffffff" }}
        transform={{ rotate: "330" }}
        onClick={handleThemeChange}
      />
    );
  }

  return (
    <header className="header" data-theme={theme}>
      <Link href="/">Where in the world?</Link>

      <div className="theme-box">
        {themeState}
        <h4>Dark Mode</h4>
      </div>
    </header>
  );
}
