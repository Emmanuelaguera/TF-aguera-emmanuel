import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const NavBar = () => {
  return (

      <Flex>
        <Box>
          {/*brand*/}
          <h1>Logo</h1>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton>
              Categorias
            </MenuButton>
            <MenuList>
              <MenuItem>PlayStation</MenuItem>
              <MenuItem>xbox</MenuItem>
              <MenuItem>PC</MenuItem>
              <MenuItem>Nintendo</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box>
          {/*carrito*/}
          <CartWidget />
        </Box>
      </Flex>

  

  )
}

export default NavBar