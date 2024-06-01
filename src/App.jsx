import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Courses = lazy(() => import('./pages/Courses/Courses'))
const Recipes = lazy(() => import('./pages/Recipes/Recipes'))
const CategoryDetails = lazy(() => import('./pages/CategoryDetails/CategoryDetails'))
const Details = lazy(() => import('./components/Details/Details'))
const AreaDetails = lazy(() => import('./pages/AreaDetails/AreaDetails'))
const NameDetails = lazy(() => import('./pages/NameDetails/NameDetails'))

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/category-details/:categoryName/:categoryIndex' element={<CategoryDetails />} />
          <Route path='/details/:mealId' element={<Details />}/>
          <Route path='/area-details/:areaName' element={<AreaDetails />} />
          <Route path='/name-details/:firstLetter' element={<NameDetails />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
