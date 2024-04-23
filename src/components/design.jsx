import { NavLink } from 'react-router-dom'
import podcast from '../assets/gf-pod.png'
import pro from '../assets/professional_grants.png'
import news from '../assets/newsb.png'
const Design = () => {
  return (
    <div className="md:px-10 m-10">
      <div className="mb-10">
        <h1 className="text-4xl md:text-4xl font-bold font-serif mt-10">
          Design Work
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="grid grid-cols-1">
          <h3 className="text-sm font-semibold pb-1">
            Grinnell College's Center for Careers, Life, and Service
          </h3>
          <p className="text-sm font-light pb-1">
            <span className="text-black italic">going forth</span> Podcast App
          </p>
          <p className="text-sm font-light pb-1">Mobile Design Case Study</p>
          <p className="text-sm font-light">2024</p>
          <NavLink to="/goingforth">
            <img
              src={podcast}
              className="w-full h-[250px] object-cover rounded-3xl mt-3 mb-10"
              aria-label="going forth podcast app"
            />
          </NavLink>
        </div>
        <div className="grid grid-cols-1">
          <h3 className="text-sm font-semibold pb-1">
            Grinnell College's Center for Careers, Life, and Service
          </h3>
          <p className="text-sm font-light pb-1">Career Website Banner</p>
          <p className="text-sm font-light pb-1">Web Design</p>
          <p className="text-sm font-light">2024</p>
          <NavLink to="/clsdesign">
            <img
              src={pro}
              className="w-full h-[250px] object-cover rounded-3xl mt-3 mb-10"
              aria-label="going forth podcast app"
            />
          </NavLink>
        </div>
        <div className="grid grid-cols-1">
          <h3 className="text-sm font-semibold pb-1">
            Fusion Academy - Alpharetta Campus
          </h3>
          <p className="text-sm font-light pb-1">Digital Newsletters</p>
          <p className="text-sm font-light pb-1">Web Design</p>
          <p className="text-sm font-light">2023</p>
          <NavLink to="/fusion">
            <img
              src={news}
              className="w-full h-[250px] object-cover rounded-3xl mt-3 mb-10"
              aria-label="going forth podcast app"
            />
          </NavLink>
        </div>
      </div>
    </div>
  )
}
export default Design
