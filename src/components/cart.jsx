import React from 'react'
import Form from './Form'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { Button, Center, Spacer, Card, CardBody } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext)
  return (
    <div>
      {cart.products.map((product, index) =>
      (<div key={product.id + index}>
        <Center>
          <Card maxW='350px'>
            <CardBody>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>{product.price} x <strong>{product.quantity}</strong></p>
              <img src={product.img} />
            </CardBody>
          </Card>
        </Center>
        <Spacer>
          <Center>
            <IconButton onClick={() => removeItem(product.id)} aria-label='Search database' icon={<DeleteIcon />} />
          </Center>
        </Spacer>
      </div>))}
      <Spacer>
        <Center>
          <Spacer>
            <h3>TOTAL: ${cart.totalPrice}</h3>
          </Spacer>
          <Button onClick={clearCart}>
            Vaciar Carrito
          </Button>
        </Center>
      </Spacer>
      <Form />
    </div>
  )
}
export default Cart