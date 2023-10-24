import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, useCounter } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ name,id, description, price }) => {

    return (
        <div>
            <div><Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text>
                            {description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Comprar
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                        <Link to={`/item/${id}`}>Ver detalles</Link>
                        
                        </Button>
                    </ButtonGroup>
                </CardFooter>

            </Card></div>

        </div>

    )
}


export default Item