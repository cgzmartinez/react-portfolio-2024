import { NavLink } from "react-router-dom";
import Palette from "../assets/palette-icon.svg?react";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {

  return (

    <nav className="flex items-center justify-between p-8">
      <div className="justify-start font-normal text-4xl md:text-5xl">
        <p>cm.</p>
      </div>

      <button>
        <FaBars className="flex md:hidden justify-end items-center h-7 w-7" />
      </button>
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