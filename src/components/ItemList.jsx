import React from 'react'
import { Flex } from '@chakra-ui/react'
import Item from './Item'


const ItemList = ({ productos }) => {
  
  return (
    <Flex gap={4} flexWrap="wrap" justifyContent="center">
      {
        productos.map((p) => {
          return(
          <Item
            key={p.id}
            name={p.name}
            id={p.id}
            description={p.description}
            img={p.img}
            price={p.price}
          />)
        })
      }
    </Flex>
  )
}

export default ItemList