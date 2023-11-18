import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemCounter from './components/ItemCount'
import ItemDetail from './components/ItemDetail'
import { CartProvider } from './context/cartContext'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting={"Bienvenidos a Sector Games Tandil"} />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/categoria/:category' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/itemDetail' element={<ItemDetail />} />
          <Route exact path='/itemCount' element={<ItemCounter />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
