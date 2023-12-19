import Player from "../assets/player.svg?react";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex px-7">
          <Player className="player" />
        </div>

        <div className="float-right pl-20 pt-10 ml-20">
          <h1 className="font-serif font-bold text-2xl">Find me here</h1>
          <ul className="font-serif font-medium text-2xl pt-10">
            <li>GitHub</li>
            <li>Linkedin</li>
            <li>Medium</li>
            <li>Upwork</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center pt-10 pb-20 mt-20">
        <p>Designed and built by <span>Carlos Martinez</span></p>
      </div>
    </div>
  )
}

export default Footer