import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
import ItemCounter  from './ItemCount'

const Item = ({ name, id, description, price, img }) => {
    const { addToCart } = useContext(CartContext)
    const [ quantity, setQuantity] = useState(1)

    const handleClick = () => {
        addToCart({ name, id, description, price, img }, quantity)
    }

    const increment = () => {
        setQuantity(quantity + 1)
    }

    const decrement = () => {
        setQuantity(quantity - 1)
    }

    return (
        <Card maxW='350px'>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        {description}
                    </Text>
                    <img src={img} />
                    <Text color='blue.600' fontSize='2xl'>
                        ${price}
                    </Text>
                    <ItemCounter quantity={quantity} increment={increment} decrement={decrement}/>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue' onClick={handleClick}>
                        Agregar al Carrito
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        <Link to={`/item/${id}`}>Ver detalles</Link>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
export default Item