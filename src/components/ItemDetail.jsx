import React from 'react'
import ItemCounter from './ItemCount'
import Item from './Item'

const ItemDetail = ({ filtrado }) => {
  console.log(filtrado)
  return (
    <div>
      <Item
        name={filtrado.name}
        id={filtrado.id}
        description={filtrado.description}
        price={filtrado.price}
        stock={filtrado.stock}
      />
      <ItemCounter />

    </div>
  )
}

export default ItemDetail