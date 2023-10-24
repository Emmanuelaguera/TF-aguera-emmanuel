import React from 'react'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCounter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h2>contador: {count}</h2>
            <Button onClick={() => increment()}>+</Button>
            <Button onClick={() => decrement()} >-</Button>
        </div>
    )
}

export default ItemCounter