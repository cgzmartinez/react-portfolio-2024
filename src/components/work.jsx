import ProfilePic from "../assets/profile-pic.svg?react";
import ProjectCards from "./projectcard";

const Work = () => {
  return (
    <div>
      <section className="grid gap-8 m-20 md:grid-cols-2 md:pl-20 md:items-center md:text-left">
        <div>
          <h1 className="text-4xl font-serif font-bold pb-6">Hi! My name is Carlos Martinez</h1>
          <p className="text-xl font-serif font-medium pb-6" >I’m a <span>full-stack web developer</span> with a background in graphic design and education.</p>
          <p className="text-xl font-serif font-medium pb-6" >Currently focused on creating accessible and visually appealing products.</p>
        </div>

        <div>
          <ProfilePic className="bounce w-full items-end" height="450" />
        </div>

        <div className="pt-10">
          <h1 className="text-4xl font-serif font-bold">Projects I have worked on</h1>
        </div>
      </section>
      <div className="p-10">
        <ProjectCards />
      </div>
    </div>
  )
}

export default Work