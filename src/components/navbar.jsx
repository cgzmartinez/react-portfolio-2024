import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaCodepen, FaGithub, FaLinkedin, FaXmark, FaSun } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { motion } from "framer-motion"

const Navbar = () => {

  // Manages the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (

    <nav className="flex items-center justify-between p-8">
      {/*Main Logo*/}
      <div className="justify-start font-normal text-4xl md:text-5xl">
        <a href="/"><motion.p whileHover={{ scale: 1.25, }}>cm.</motion.p></a>
      </div>
      <div className="flex items-centerjustify-end">
        <motion.button
          whileHover={{
            scale: 1.2,
            rotate: 90
          }}
          whileTap={{
            scale: .9
          }} className="block md:hidden bg-[#59C9A5] rounded-[7px] p-[7px] mx-3" >
          <FaSun className="h-5 w-5" />
        </motion.button>
        {/*Toggle Navbar's Mobile Menu*/}
        <button onClick={handleNav} className='block md:hidden'>
          {nav ? <FaXmark size={30} /> : <FaBars size={30} />}
        </button>
      </div>
      {/*Mobile Navbar*/}
      <ul
        className={
          nav
            ? 'fixed z-40 md:hidden left-0 top-0 w-[70%] h-full bg-white rounded-r-3xl drop-shadow-2xl ease-in-out duration-500'
            : 'ease-in-out w-[70%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >

        {/* Mobile Navigation Items */}
        <div className="justify-start font-normal text-4xl md:text-5xl p-8">
          <a href="/"><p>cm.</p></a>
        </div>
        <div onClick={handleNav} className="p-8">
          <li className="font-light pb-10 text-xl">
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}
            >Work</NavLink>
          </li>
          <li className="font-light pb-10 text-xl">
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}
            >About</NavLink>
          </li>
          <li className="font-light text-xl">
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}
            >Contact</NavLink>
          </li>
        </div>
        <div className="grid grid-cols-4 absolute inset-x-0 bottom-0 p-6">
          <a href="https://codepen.io/c_martinez" target="_blank" rel="noreferrer">
            <FaCodepen className="hover:fill-[#7fd0e1]" size={30} />
          </a>
          <a href="https://github.com/cgzmartinez" target="_blank" rel="noreferrer">
            <FaGithub className="hover:fill-[#7a38dd]" size={30} />
          </a>
          <a href="https://www.linkedin.com/in/carlos-g-martinez/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:fill-[#0077B5]" size={30} />
          </a>
          <a href="https://www.upwork.com/freelancers/~0181d2b492c6b37a9e" target="_blank" rel="noreferrer" >
            <SiUpwork className="hover:fill-[#14A800]" size={30} />
          </a>
        </div>
      </ul>

      {/*Desktop Navbar*/}
      <div className="hidden md:block items-center">
        <ul className="flex justify-end items-center">
          <li className="font-light px-7 text-lg">
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}
            >Work</NavLink>
          </li>
          <li className="font-light px-7 text-lg">
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}
            >About</NavLink>
          </li>
          <li className="font-light px-7 text-lg">
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}
            >Contact</NavLink>
          </li>
          <div className="pb-5 pl-7">
            <motion.button
              whileHover={{
                scale: 1.2,
                rotate: 90
              }}
              whileTap={{
                scale: .9
              }} className="flex bg-[#59C9A5] rounded-[7px] p-[7px]" >
              <FaSun className="h-5 w-5" />
            </motion.button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar