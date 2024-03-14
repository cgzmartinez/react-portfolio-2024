import AboutPic from '../assets/about.svg?react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="grid gap-2 md:grid-cols-2 md:px-[80px] md:items-center md: md:text-left">
        <h1 className="pt-10 px-20 text-left md:hidden block text-4xl font-serif font-bold dark:text-[#a0c2a4]">
          About Me
        </h1>

        <motion.div className="m-10" whileHover={{ rotate: 5 }}>
          <AboutPic
            className="w-full items-end md:h-[500px]"
            height="450"
            aria-label="About Picture"
          />
        </motion.div>
        <div className="px-20 dark:px-10 md:pt-20 md:px-20">
          <div className="dark:p-10 dark:md:p-10 dark:bg-[#353535] dark:rounded-[25px]">
            <h1 className="hidden md:block text-4xl font-serif font-bold pb-10 dark:text-[#a0c2a4]">
              About Me
            </h1>
            <p className="text-lg font-sans font-regular pb-6 dark:text-white/50">
              Initially setting out to work in graphic design, I found a way to
              incorporate graphic design while working in education.
            </p>
            <p className="text-lg font-sans font-regular pb-6 dark:text-white/50">
              While working as a teacher, I completed a certification for Full
              Stack Web Development. I've since worked at Grinnell College,
              helping with debugging, feature implementation, website
              maintenance, and managing add-on modules at their Center for
              Careers, Life, and Service.
            </p>
            <p className="text-lg font-sans font-regular pb-6 dark:text-white/50">
              These are some of the technologies I’ve been working with
              recently:
            </p>

            <ul className="grid gap-1 grid-cols-3 py-6">
              <li className="text-sm">JavaScript (ES6+)</li>
              <li className="text-sm pl-6">React</li>
              <li className="text-sm">WordPress</li>

              <li className="text-sm">TypeScript</li>
              <li className="text-sm pl-6">Angular</li>
              <li className="text-sm">MongoDB</li>

              <li className="text-sm">Node.js</li>
              <li className="text-sm pl-6">Vue</li>
              <li className="text-sm">Express.js</li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
