import React from 'react'
import Item from './Item'


const ItemList = ({ productos }) => {
  
  return (
    <div>
      {
        productos.map((p) => {
          return(
          <Item
            key={p.id}
            name={p.name}
            id={p.id}
            description={p.description}
            price={p.price}
            stock={p.stock}
          />)
        })
      }
    </div>
  )
}

export default ItemList