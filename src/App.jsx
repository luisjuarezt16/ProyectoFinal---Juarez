import './App.css'
import Navbar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import ItemListContainer from './components/ItemListContainer'
import Contact from './pages/Contact' 
import Products from './pages/Products'
import Home from './pages/Home'
import ItemDetailContainer from './components/container/ItemDetailContainer'


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/products' element = {<Products/>} />
        <Route path='/product/:id' element={<ItemDetailContainer />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
