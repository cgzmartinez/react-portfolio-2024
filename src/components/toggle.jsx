import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import useDarkMode from "./usedarkmode";
import { motion } from "framer-motion";

export default function Toggle() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(colorTheme === "light" ? true : false);

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkMode(!darkMode);
  };

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const onClickHandler = () => {
    toggleDarkMode()
    handleToggle()
  }

  return (
    <div>
      <motion.button onClick={onClickHandler}
        whileTap={{ scale: 0.9 }}
        className="block md:hidden bg-[#59C9A5] rounded-[7px] p-[7px] mx-3"
      >
        {toggle ? <FaSun className="dark:fill-gray-900" size="20px" /> : <FaMoon size="20px" />}      </motion.button>
    </div>
  );
}