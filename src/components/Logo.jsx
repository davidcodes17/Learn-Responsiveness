import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import { Music } from 'iconsax-react'
import React from 'react'

const Logo = () => {
  return (
    <Flex alignItems={'center'} gap={0}>
        <IconButton icon={<Music variant="Bold" color="tomato" size={30} />} bg={'none'} _hover={'none'} />
        <Text fontSize={{lg : 30, md : 20,sm: 20,base : 10}}>DC Studios</Text>
    </Flex>
  )
}

export default Logo