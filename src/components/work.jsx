import ProfilePic from "../assets/profile-pic.svg?react";


const Work = () => {
  return (
    <div>
      <div className="flex items-center pt-20">
        <div className="grid grid-rows-3 grid-flow-col pl-20 ml-20 mt-20">
          <h1 className="font-serif font-bold text-5xl">Hi! My name is Carlos Martinez</h1>
          <p className="row-start-2 py-4 font-serif font-thin text-4xl pr-20" >I’m a <span>full-stack web developer</span> with a background in graphic design and education.</p>
          <p className="row-start-3 py-4 font-serif font-thin text-4xl pr-20" >Currently focused on creating accessible and visually appealing products.</p>
        </div >
        <div className="flex pr-20 px-20 mr-20 mt-20 float-right">
          <ProfilePic className="" width="500" height="588" />
        </div>
      </div>

      <div className="px-20 pt-20 py-10 ml-20 mt-20">
        <h1 className="font-serif font-bold text-6xl">Projects I have worked on</h1>
      </div>
      <div className="wrap min-h-screen items-center px-20 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-10 py-20 m-auto mx-auto">
          <div className="rectangle flex">
          </div>
          <div className="rectangle flex">
          </div>
          <div className="rectangle flex">
          </div>
          <div className="rectangle flex">
          </div>
          <div className="rectangle flex">
          </div>
          <div className="rectangle flex">
          </div>
        </div>
      </div>

    </div>

  )
}

export default Work