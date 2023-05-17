import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const updatedDarkMode = !darkMode;
    setDarkMode(updatedDarkMode);
    localStorage.setItem("darkMode", updatedDarkMode.toString());
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className={darkMode ? "navbar-dark" : "navbar-light"}>
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          E-Commerce
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="navbar-icon">
          <i className="fa-solid fa-user"></i>
        </Link>
        <Link to="/purchases" className="navbar-icon">
          <i className="fa-sharp fa-solid fa-bag-shopping"></i>
        </Link>
        <Link to="/" className="navbar-icon">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <button
          className={darkMode ? "dark-mode-button" : "light-mode-button"}
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
