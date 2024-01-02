const About = () => {
  return (
    <div>
      <section className="grid gap-8 m-20 md:grid-cols-2 px-20 md:items-center md:text-left">
        <div className="bg-[#59C9A5] flex rounded-xl items-end p-20" />

        <div className="px-20">
          <h1 className="text-4xl font-serif font-bold pb-10"><span>About Me</span></h1>
          <p className="text-lg font-sans font-regular pb-6" >While initially setting out to work in graphic design, I’ve worked in education since 2019.</p>
          <p className="text-lg font-sans font-regular pb-6" >While working as a teacher, I completed a certification for Full Stack Web Development after building a quiz application for a student’s class. </p>
          <p className="text-lg font-sans font-regular pb-6" >These are some of the technology I’ve been working with recently: </p>
          <ul className="grid gap-1 grid-cols-3">
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
    </div>
  )
}

export default About