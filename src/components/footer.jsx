import SpotifyNowPlaying from "../spotify/SpotifyNowPlaying";
const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-20 md:px-20">
        <div className="md:pt-6 md:pl-5 md:ml-20">
          
          <SpotifyNowPlaying/>

        </div>
        <div className="pt-10 text-center md:text-left md:pt-6 md:pl-20">
          <h1 className="font-serif font-bold text-lg md:text-xl dark:text-[#829d85]">Find me here</h1>
          <footer>
            <ul className="font-serif font-medium text-sm md:text-lg pt-6">
              <a href="https://codepen.io/c_martinez" target="_blank" rel="noreferrer"><li>CodePen</li></a>
              <a href="https://github.com/cgzmartinez" target="_blank" rel="noreferrer"><li>GitHub</li></a>
              <a href="https://www.linkedin.com/in/carlos-g-martinez/" target="_blank" rel="noreferrer"><li>Linkedin</li></a>
              <a href="https://medium.com/@cgzmarti" target="_blank" rel="noreferrer"><li>Medium</li></a>
              <a href="https://www.upwork.com/freelancers/~0181d2b492c6b37a9e" target="_blank" rel="noreferrer"><li>Upwork</li></a>
            </ul>
          </footer>
        </div>

      </div>
      <div className="flex items-center justify-center py-10">
        <p className="text-xs dark:text-white/50">Designed and built by <a href="https://github.com/cgzmartinez" target="_blank" rel="noreferrer"><span>Carlos Martinez</span></a></p>
      </div>
    </div>
  )
}

export default Footer