import { useState } from "react";
import { NavLink } from "react-router-dom";
import Palette from "../assets/palette-icon.svg?react";
import { FaBars, FaGithub, FaLinkedin, FaXmark } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";

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
        <a href="/"><p>cm.</p></a>
      </div>

      {/*Toggle Navbar's Mobile Menu*/}
      <button onClick={handleNav} className='justify-end items-center block md:hidden'>
        {nav ? <FaXmark size={30} /> : <FaBars size={30} />}
      </button>

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
          <a href="https://github.com/cgzmartinez" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/carlos-g-martinez/" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.upwork.com/freelancers/~0181d2b492c6b37a9e" target="_blank" rel="noreferrer" >
            <SiUpwork size={30} />
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
          <div className="flex pl-7 pb-4" >
            <Palette className="h-10 w-10" />
          </div>
        </ul>
      </div>

      {/*Clicking off of the menu closes menu*/}
      <div onClick={handleNav} className="fixed h-[100%] w-[100%] z-30"></div>
    </nav>
  );
};

export default Navbar