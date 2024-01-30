import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa6'
import useDarkMode from './usedarkmode'
import { motion } from 'framer-motion'

export default function DeskToggle() {
  const [colorTheme, setTheme] = useDarkMode()
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false,
  )
  if (localStorage.getItem('mode') == 'dark') {
    useDarkMode()
  }

  const toggleDarkMode = () => {
    localStorage.setItem('mode', 'dark')
    setTheme(colorTheme)
    setDarkMode(!darkMode)
  }

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const onClickHandler = () => {
    toggleDarkMode()
    handleToggle()
  }

  return (
    <div>
      <motion.button
        onClick={onClickHandler}
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="flex bg-[#59C9A5] rounded-[7px] p-[7px]"
      >
        {toggle ? (
          <FaSun className="dark:fill-gray-900" size="20px" />
        ) : (
          <FaMoon size="20px" />
        )}
      </motion.button>
    </div>
  )
}
