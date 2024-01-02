import { useState } from "react";
import { NavLink } from "react-router-dom";
import Palette from "../assets/palette-icon.svg?react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {

  // Manages the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (

    <nav className="flex items-center justify-between p-8">
      <div className="justify-start font-normal text-4xl md:text-5xl">
        <p>cm.</p>
      </div>

      {/*Toggle Navbar's Mobile Menu*/}
      <button onClick={handleNav} className='justify-end items-center block md:hidden'>
        {nav ? <FaXmark size={30} /> : <FaBars size={30} />}
      </button>

      {/*Mobile Navbar*/}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[70%] h-full bg-white rounded-3xl drop-shadow-xl ease-in-out duration-500'
            : 'ease-in-out w-[70%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Navigation Items */}
        <div className="justify-start font-normal text-4xl md:text-5xl p-8">
          <p>cm.</p>
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

      </ul>

      {/*Desktop Navbar*/}
      <div className="hidden md:block">
        <ul className="flex justify-end items-center">
          <li className="font-light px-7 text-xl">
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}
            >Work</NavLink>
          </li>
          <li className="font-light px-7 text-xl">
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}
            >About</NavLink>
          </li>
          <li className="font-light px-7 text-xl">
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}
            >Contact</NavLink>
          </li>
          <div className="flex pl-7 pb-4" >
            <Palette className="h-10 w-10" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar