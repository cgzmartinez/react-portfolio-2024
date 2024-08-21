import { NavLink } from 'react-router-dom'
import podcast from '../assets/gf-pod.png'
import pro from '../assets/professional_grants.png'
import Southcity from '../assets/southcity2.png'
import Bluestem from '../assets/bluestem.png'
const Design = () => {
  return (
    <div className="md:px-10 m-10">
      <div className="mb-10">
        <h1 className="text-4xl md:text-4xl font-bold font-serif mt-10 dark:text-[#a0c2a4]">
          Design Work
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="grid grid-cols-1">
          <h3 className="text-sm font-semibold pb-1 dark:text-[#a0c2a4]">
            Grinnell College's Center for Careers, Life, and Service
          </h3>
          <p className="text-sm font-light pb-1 dark:text-white/80">
            <span className="text-black italic dark:text-white/80">
              going forth
            </span>{' '}
            Podcast App
          </p>
          <p className="text-sm font-light pb-1 dark:text-white/80">
            Mobile Design Case Study
          </p>
          <p className="text-sm font-light dark:text-white/80">2024</p>
          <NavLink to="/goingforth">
            <img
              src={podcast}
              className="bounce w-full h-[250px] object-cover rounded-3xl mt-3 mb-10"
              aria-label="going forth podcast app"
            />
          </NavLink>
        </div>
        <div className="grid grid-cols-1">
          <h3 className="text-sm font-semibold pb-1 dark:text-[#a0c2a4]">
            Freelance
          </h3>
          <p className="text-sm font-light pb-1 dark:text-white/80">
            South City Medical Center
          </p>
          <p className="text-sm font-light pb-1 dark:text-white/80">
            Hospital Brand and Landing Page Design
          </p>
          <p className="text-sm font-light dark:text-white/80">2024</p>
          <NavLink to="/southcity">
            <img
              src={Southcity}
              className="bounce w-full h-[250px] object-cover drop-shadow-xl rounded-3xl mt-3 mb-10"
              aria-label="south city medical center"
            />
          </NavLink>
        </div>

        <div className="grid grid-cols-1">
          <h3 className="text-sm font-semibold pb-1 dark:text-[#a0c2a4]">
            Freelance{' '}
          </h3>
          <p className="text-sm font-light pb-1 dark:text-white/80">
            Bluestem Healthcare
          </p>
          <p className="text-sm font-light pb-1 dark:text-white/80">
            Hospital Brand and Landing Page Design
          </p>
          <p className="text-sm font-light dark:text-white/80">2024</p>
          <NavLink to="/bluestem">
            <img
              src={Bluestem}
              className="bounce w-full h-[250px] object-cover drop-shadow-xl rounded-3xl mt-3 mb-10"
              aria-label="south city medical center"
            />
          </NavLink>
        </div>
        <div className="grid grid-cols-1">
          <h3 className="text-sm font-semibold pb-1 dark:text-[#a0c2a4]">
            Grinnell College's Center for Careers, Life, and Service
          </h3>
          <p className="text-sm font-light pb-1 dark:text-white/80">
            Career Website Banner
          </p>
          <p className="text-sm font-light pb-1 dark:text-white/80">
            Web Design
          </p>
          <p className="text-sm font-light dark:text-white/80">2024</p>
          <NavLink to="/clsdesign">
            <img
              src={pro}
              className="bounce w-full h-[250px] object-cover rounded-3xl mt-3 mb-10"
              aria-label="CLS Career Web Banners"
            />
          </NavLink>
        </div>
      </div>
    </div>
  )
}
export default Design
