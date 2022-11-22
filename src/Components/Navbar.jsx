import React from 'react'
import {Box, Button, Flex, Spacer} from '@chakra-ui/react'
import { useState } from 'react'
import { useContext } from 'react'
import { Navcontext } from '../Context/Navcontext'


const Navbar = () => {
const {color,setcolor}=useContext(Navcontext)
const a={bgGradient:'revert-layer',position:'fixed',bgColor:'grey'}
const b={bgGradient:'revert-layer',bgColor:'yellow',position:'fixed'}



  return (
    <Box sx={a} w='100%'   border='1px solid teal' p={5} pl={100} pr={100}>
        <Flex>
        <Box>
            <Button colorScheme='none' _hover={{color:'red'}} variant='ghost'>
               Manoj Mogal
            </Button>
        </Box>
        <Spacer/>
        <Box>
            <Button colorScheme='none' _hover={{color:'red'}} variant='ghost'  mr={6}>
                Home
            </Button>
            <Button colorScheme='none' _hover={{color:'red'}} variant='ghost'  mr={6}>
                About
            </Button>
            <Button colorScheme='none' _hover={{color:'red'}} variant='ghost'  mr={6}>
                Skills
            </Button>
            <Button colorScheme='none' _hover={{color:'red'}} variant='ghost'  mr={6}>
                Project
            </Button>
            <Button colorScheme='none' _hover={{color:'red'}} variant='ghost'  mr={6}>
                Contact
            </Button>
        </Box>
        </Flex>
    </Box>
  )
}

export default Navbar