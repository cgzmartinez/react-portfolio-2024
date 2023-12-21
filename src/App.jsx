import { BrowserRouter, Routes, Route } from 'react-router-dom'
{/* import Navbar from './components/navbar' */ }
import Work from './components/work'
import About from './components/about'
import Contact from './components/contact'
{/* import Footer from './components/footer' */ }

function App() {
  return (
    <BrowserRouter>
      {/*<Navbar />*/}
      <div>
        <Routes>
          <Route path='/' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  )
}

export default App
