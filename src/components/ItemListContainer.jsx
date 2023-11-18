import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Box, Center, Spinner  } from '@chakra-ui/react'
import { getDocs, getFirestore, collection } from 'firebase/firestore'

const ItemListContainer = () => {
  const { category } = useParams()
  const [filtrado, setFiltrado] = useState([])
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const querydb = getFirestore()
    getDocs(collection(querydb, "Video juegos")).then( querySnapshot => {
      const prd = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        prd.push({id: doc.id, ...doc.data()})
      });
      setProductos(prd)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (category) {
      const filteredProduts = productos.filter((productos => productos.category == category))
      setFiltrado(filteredProduts)
    }
    else {
      setFiltrado(productos)
    }

  }, [category, productos])

  
  if (loading) {
    return <Center><Spinner size='xl' /></Center>
  }

  return (
    <Box p='1rem'>
      <ItemList productos={filtrado} />
    </Box>
  )
}

export default ItemListContainer

