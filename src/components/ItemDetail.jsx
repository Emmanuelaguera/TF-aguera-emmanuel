import React from 'react'
import Item from './Item'
import { Center } from '@chakra-ui/react'

const ItemDetail = ({ item }) => {

  return (
    <div>
      <Center>
        <Item
          img={item.img}
          name={item.name}
          id={item.id}
          description={item.description}
          price={item.price}
        />
      </Center>
    </div>
  )
}
export default ItemDetail