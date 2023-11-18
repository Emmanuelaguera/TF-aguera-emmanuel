import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

    <Flex>
      <Box>
        <Link to="/">
    <img src="logo.jpg"/>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton>
            Categorias
          </MenuButton>
          <MenuList>
            <Link to="/categoria/PlayStation">
              <MenuItem>
                PlayStation
              </MenuItem>
            </Link>
            <Link to="/categoria/xbox">
              <MenuItem>
                xbox
              </MenuItem>
            </Link>
            <Link to="/categoria/PC">
              <MenuItem>
                PC
              </MenuItem>
            </Link>
            <Link to="/categoria/Nintendo">
              <MenuItem>
                Nintendo
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </Box>
    </Flex>



  )
}

export default NavBar