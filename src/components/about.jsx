import AboutPic from "../assets/about.svg?react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}>
      <section className="grid gap-2 md:grid-cols-2 md:px-[80px] md:items-center md:text-left">
        <h1 className="pt-10 px-20 text-left md:hidden block text-4xl font-serif font-bold"><span>About Me</span></h1>

        <motion.div className="m-10" whileHover={{ rotate: 5 }}>
          <AboutPic className="w-full items-end md:h-[500px]" height="450" />
        </motion.div>
        <div className="px-20 md:pt-20 md:px-20 sm:px-20">
          <h1 className="hidden md:block text-4xl font-serif font-bold pb-10"><span>About Me</span></h1>
          <p className="text-lg font-sans font-regular pb-6" >While initially setting out to work in graphic design, I’ve worked in education since 2019.</p>
          <p className="text-lg font-sans font-regular pb-6" >While working as a teacher, I completed a certification for Full Stack Web Development after building a quiz application for a student’s class. </p>
          <p className="text-lg font-sans font-regular pb-6" >These are some of the technology I’ve been working with recently: </p>
          <ul className="grid gap-1 grid-cols-3 py-5">
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

      </section>
    </motion.div>
  )
}

export default About