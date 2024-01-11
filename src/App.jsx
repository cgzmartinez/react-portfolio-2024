import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Work from './components/work'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AnimatePresence>
  )
}

export default App
