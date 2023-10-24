import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

    <Flex>
      <Box>
        <Link to="/">
        <h1>Logo</h1>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to="/categoria/cat1">
                PlayStation
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/categoria/cat2">
                xbox
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/categoria/cat3">
                PC
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/categoria/cat4">
                Nintendo
              </Link>
            </MenuItem>
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