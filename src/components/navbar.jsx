import { FaPalette } from "react-icons/fa";

const Navbar = () => {

  return (

    <nav className="flex flex-row items-center justify-between pt-12 pr-10 bg-light">
      <div className="justify-start font-normal pl-20 text-5xl">
        <h1>cm.</h1>
      </div>
      <div>
        <ul className="justify-end items-center flex">
          <li className="font-normal px-6 text-2xl">Work</li>
          <li className="font-normal px-6 text-2xl">About</li>
          <li className="font-normal px-6 text-2xl">Contact</li>
          <div className="px-6">
            <FaPalette class="h-6 w-6"></FaPalette>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar