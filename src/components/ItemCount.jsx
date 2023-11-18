import React from 'react'
import { Button, Flex } from '@chakra-ui/react'

const ItemCounter = ({quantity, increment, decrement}) => {
    return (
        <div>
            <h2>Cantidad: {quantity}</h2>
            <Flex gap={2}>
                <Button onClick={decrement} isDisabled={quantity === 1}>-</Button>
                <Button onClick={increment}>+</Button>
            </Flex>
        </div>
    )
}

export default ItemCounter