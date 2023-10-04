import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Sector Games Tandil"} />

    </>
  )
}

export default App
