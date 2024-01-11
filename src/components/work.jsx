import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import ProfilePic from "../assets/profile-pic.svg?react";
import ProjectCards from "./projectcard";
import Resume from "../assets/cm-resume-2023.pdf";

const Work = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}>
      <section className="grid grid-cols-1 gap-8 m-10 md:grid-cols-2 md:pl-20 md:items-center md:text-left">
        <div className="m-6">
          <h1 className="text-4xl font-serif font-bold pb-6">Hi! My name is Carlos Martinez</h1>
          <p className="text-lg md:text-xl font-serif font-medium pb-6" >I’m a <span>full-stack web developer</span> with a background in graphic design and education.</p>
          <p className="text-lg md:text-xl font-serif font-medium" >Currently focused on creating accessible and visually appealing products at Grinnell College.</p>
          <div className="flex items-center">
            <a href={Resume} target="_blank" rel="noreferrer">
              <motion.button
                whileHover={{ scale: 1.15 }}
                className="rounded-[5px] bg-[#59C9A5] font-serif p-1 px-2 my-6 font-bold text-lg text-white outline-none"
              > Resume
              </motion.button>
            </a>
            <motion.a whileHover={{ scale: 1.15 }} href="https://www.linkedin.com/in/carlos-g-martinez/" target="_blank" rel="noreferrer">
              <FaLinkedin size={40} className="mx-3 fill-[#59C9A5]" />
            </motion.a>
          </div>
        </div>
        <motion.div className="flex"
          whileHover={{ rotate: 5 }}>
          <ProfilePic className="w-full items-end" height="450" />
        </motion.div>
        <div className="pt-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold">Projects I’ve Worked On</h1>
        </div>
      </section>
      <div className="px-10">
        <ProjectCards />
      </div>
    </motion.div>
  )
}

export default Work