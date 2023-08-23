import { useState, useEffect } from "react";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";

const BtnDarkMode = () => {
  const [darkMode, setDarkmode] = useState("Light");

  useEffect(() => {
    console.log("useEffect Fired!!!");
    console.log("darkMode Fired!!!");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkmode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  return (
    <button className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
