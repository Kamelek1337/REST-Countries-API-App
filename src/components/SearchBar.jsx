import { useState, useRef, useContext } from "react";
import MagnifierPNG from "../assets/magnifier.png";
import MagnifierPNGBlack from "../assets/magnifier-black.png";
import ArrowDownPNG from "../assets/down-arrow.png";
import ArrowDownPNGBlack from "../assets/down-arrow-black.png";
import { motion, animate } from "framer-motion";
import { ThemeContext } from "../context/Theme";
export default function SearchBar({ items, itemKeyFn, children }) {
  const { theme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const [region, setRegion] = useState("All");
  const [searchCountry, setSearchCountry] = useState("");
  const lastChange = useRef();

  const searchResults = items.filter((item) =>
    JSON.stringify(item.name)
      .toLowerCase()
      .includes(searchCountry.toLowerCase())
  );

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchCountry(event.target.value);
    }, 500);
  }
  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function handleSelectRegion(region) {
    setRegion(region);
    setToggle((prev) => !prev);
  }

  return (
    <article className="container-box">
      <div className="filters">
        <div className="input-box">
          <div>
            {theme === "light theme" ? (
              <img src={MagnifierPNGBlack} alt="" />
            ) : (
              <img src={MagnifierPNG} alt="" />
            )}
          </div>
          <input
            placeholder="Search for a country..."
            onChange={handleChange}
          />
        </div>
        <div className="filter-region">
          <div className="default" onClick={handleToggle}>
            <p>{region !== "All" ? region : "Filter by Region"}</p>
            <motion.span
              animate={{ rotate: toggle ? 180 : 0 }}
              style={{ width: "20px", height: "20px" }}
            >
              {theme === "light theme" ? (
                <img src={ArrowDownPNGBlack} alt="" className="arrow-image" />
              ) : (
                <img src={ArrowDownPNG} alt="" className="arrow-image" />
              )}
            </motion.span>
          </div>
          {toggle && (
            <motion.div
              className="toggle-list"
              initial={{ opacity: 0.2 }}
              whileTap={{ scale: 1 }}
              whileInView={{ opacity: 1 }}
            >
              <li onClick={() => handleSelectRegion("All")}>All</li>
              <li onClick={() => handleSelectRegion("Africa")}>Africa</li>
              <li onClick={() => handleSelectRegion("Americas")}>Americas</li>
              <li onClick={() => handleSelectRegion("Asia")}> Asia</li>
              <li onClick={() => handleSelectRegion("Europe")}>Europe</li>
              <li onClick={() => handleSelectRegion("Oceania")}>Oceania</li>
            </motion.div>
          )}
        </div>
      </div>
      <div className="main">
        {searchResults
          .filter((country) => country.region === region || region === "All")
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((item) => (
            <li key={itemKeyFn(item)}>{children(item)}</li>
          ))}
      </div>
    </article>
  );
}
