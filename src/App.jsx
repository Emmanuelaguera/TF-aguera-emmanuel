import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemCounter from './components/ItemCount'
import ItemDetail from './components/ItemDetail'




const App = () => {
  return (

    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/Cart' element={<Cart />} />
        <Route exact path='/categoria/:category' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/itemDetail' element={<ItemDetail />} />
        <Route exact path='/itemCount' element={<ItemCounter />} />
      </Routes>
     
    </BrowserRouter>

  
   

  )
}

export default App
