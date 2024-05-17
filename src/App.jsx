import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Work from './components/work'
import About from './components/about'
import Design from './components/design'
import Contact from './components/contact'
import Footer from './components/footer'
import { AnimatePresence } from 'framer-motion'
import GoingForth from './components/goingforth'
import ClsDesign from './components/clsdesign'
import Southcity from './components/southcity'
import Bluestem from './components/bluestem'

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <div className="dark:bg-gray-900 duration-500">
          <Navbar />
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/design" element={<Design />} />
            <Route path="/goingforth" element={<GoingForth />} />
            <Route path="/clsdesign" element={<ClsDesign />} />
            <Route path="/southcity" element={<Southcity />} />
            <Route path="/bluestem" element={<Bluestem />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AnimatePresence>
  )
}

export default App
