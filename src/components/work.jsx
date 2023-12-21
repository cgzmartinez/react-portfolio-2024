import ProfilePic from "../assets/profile-pic.svg?react";

const Work = () => {
  return (
    <section className="grid gap-8 p-20 md:grid-cols-2 lg:items-center lg:text-left">
      <div>
        <h1 className="text-4xl font-serif font-bold pb-6">Hi! My name is Carlos Martinez</h1>
        <p className="text-xl font-serif font-medium pb-6" >I’m a <span>full-stack web developer</span> with a background in graphic design and education.</p>
        <p className="text-xl font-serif font-medium pb-6" >Currently focused on creating accessible and visually appealing products.</p>
      </div>

      <div>
        <ProfilePic className="bounce w-full items-end pb-6" height="450" />
      </div>

      <div>
        <h1 className="text-4xl font-serif font-bold mb-2">Projects I have worked on</h1>
      </div>
    </section>
  )
}

export default Work