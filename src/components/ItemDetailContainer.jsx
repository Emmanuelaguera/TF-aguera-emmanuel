import React from 'react'
import { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { Center, Spinner } from '@chakra-ui/react'

export const ItemDetailContainer = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    const querydb = getFirestore()
    const querydoc = doc(querydb, "Video juegos", id)
    getDoc(querydoc).then(res => {
      setData({ id: res.id, ...res.data() })
      setLoading(false)
    })
  }, [id])


  if (loading) {
    return <Center><Spinner size='xl' /></Center>
  }

  return (
    <ItemDetail item={data} />
  )
}

export default ItemDetailContainer