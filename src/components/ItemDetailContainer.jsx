import React from 'react'
import { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [filtrado, setFiltrado] = useState(null)
  const [bandera, setBandera] = useState(true)
  const productos = [
    { id: "1", name: "The Last Of As", description: "Terror, Accion y Aventura", stock: "15", price: 5200, category: "cat1" },
    { id: "2", name: "Apex Legend", description: "Battle Royale", stock: "8", price: 2200, category: "cat2" },
    { id: "3", name: "Metal Gear Solid", description: "Accion, Estrategia", stock: "12", price: 3200, category: "cat3" },
    { id: "4", name: "Uncharted", description: "Accion y Aventura", stock: "6", price: 4200, category: "cat4" },

  ]
  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000)

    } else {
      reject(" No se encuentra el producto en nuestro Stock")
    }
  })
  mostrarProductos
    .then((resultado) => {
      //console.log(resultado)
    })
    .catch((error) => {

    })


  //const filteredProduts = productos.filter((productos => productos.category == "cat1"))
  useEffect(() => {
    console.log(id)

    const filteredProduts = productos.find((producto => producto.id === id))

    setFiltrado(filteredProduts)
    setBandera(false)
    console.log (filteredProduts)


  }, [id])


  return (

    <div >
      {bandera ? "CARGANDO" : <ItemDetail filtrado={filtrado} />}
    </div>

  )
}

export default ItemDetailContainer