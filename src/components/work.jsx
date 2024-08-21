import { FaLinkedin } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import ProfilePic from '../assets/profile-pic.svg?react'
import ProjectCards from './projectcard'
import Resume from '../assets/cm-resume-2024.pdf'

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className=" grid grid-cols-1 gap-8 md:px-10 m-10 md:flex md:flex-row md:items-center md:text-left">
        <div className="p-5 md:p-0 dark:p-10 dark:bg-[#353535] dark:rounded-[25px] basis-1/2">
          <h1 className="text-4xl font-serif font-bold pb-6 dark:text-[#a0c2a4]">
            Hi! My name is Carlos Martinez
          </h1>
          <p className="text-lg md:text-xl font-serif font-medium pb-6 dark:text-white/80">
            I’m a&nbsp;
            <span className="dark:text-[#a0c2a4]">
              full-stack web developer&nbsp;
            </span>
            with a background in graphic design and education.
          </p>
          <p className="text-lg md:text-xl font-serif font-medium dark:text-white/80">
            Currently focused on creating accessible and visually appealing
            products in Higher-Ed.
          </p>
          <div className="flex items-center mt-6">
            <a href={Resume} target="_blank" rel="noreferrer">
              <motion.button
                whileHover={{
                  scale: 1.15,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="rounded-[5px] bg-[#59C9A5] font-serif p-1 px-2  font-bold text-lg text-white outline-none dark:text-[#283434]"
              >
                Resume
              </motion.button>
            </a>
            <motion.a
              whileHover={{
                scale: 1.15,
              }}
              whileTap={{
                scale: 0.9,
              }}
              href="https://www.linkedin.com/in/carlos-g-martinez/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={40} className="mx-3 fill-[#59C9A5]" />
            </motion.a>
          </div>
        </div>
        <div className="md:pl-[50px] lg:pl-[200px] basis-1/2">
          <motion.div whileHover={{ rotate: 5 }}>
            <ProfilePic
              className="w-full"
              height="450"
              aria-label="Profile Picture"
            />
          </motion.div>
        </div>
      </section>
      <div className="md:px-10 m-10 pt-10">
        <h1 className="text-4xl md:text-4xl font-serif font-bold dark:text-[#a0c2a4]">
          Projects I’ve Worked On
        </h1>
      </div>
      <div className="px-10">
        <ProjectCards />
      </div>
    </motion.div>
  )
}

export default Work
