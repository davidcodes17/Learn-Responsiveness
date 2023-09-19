import { Flex, Link } from '@chakra-ui/react'
import React from 'react'

const NavBar = () => {
  return (
    <Flex display={{lg : 'flex',md : 'none', sm : 'none', base : 'none'}} fontSize={12} gap={10}>
        <Link>Home</Link>
        <Link>Explore</Link>
        <Link>Contact</Link>
        <Link>Create Sound</Link>
    </Flex>
  )
}

export default NavBar