import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Courses from './pages/Courses/Courses'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Recipes from './pages/Recipes/Recipes'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import CategoryDetails from './pages/CategoryDetails/CategoryDetails'

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/category-details/:categoryName/:categoryIndex' element={<CategoryDetails />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
