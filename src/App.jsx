import './App.css'
import Navbar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import ItemListContainer from './components/ItemListContainer'
import Contact from './pages/Contact' 
import Products from './pages/Products'
import Home from './pages/Home'


function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido" />

      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/products' element = {<Products/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
