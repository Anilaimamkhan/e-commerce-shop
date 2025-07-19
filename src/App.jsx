import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './component/nav/Nav'
import Footer from './component/nav/footer/Footer'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import "./index.css"
import Contact from './pages/contact/Contact'

const App = () => {
  return (
<>
<BrowserRouter>
<Nav/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
{/* <Home/> */}
<Footer/>
</BrowserRouter>
</>  )
}

export default App