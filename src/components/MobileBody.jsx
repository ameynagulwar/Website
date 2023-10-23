import React from 'react'
import MoblieImage from '../images/Mobile-Body-Image.png'
// import { Box, CloseButton, Flex, Image, useColorModeValue, NavItem } from '@chakra-ui/react'
// import { Text } from '@chakra-ui/react'
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Image
  } from '@chakra-ui/react'
import SimpleSidebar from './insdieBar'

function MobileBody() {

    const LinkItems= [
        { name: 'Digital Suite' },
        { name: 'Banking Services'},
        { name: 'Utility Payment Center'},
        { name: 'Insurance'},
        { name: 'Travel' },
        { name: 'Essential Services' },
        { name: 'Partner Services' },
        { name: 'Credit Services' },
      ]
  return (
    <>
    <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{display: "flex", alignItems:"flex-end"}}>
           <Image src={MoblieImage} position='relative' left='-200px'/>
           <Text fontSize='6xl' color='#1c539e' position='absolute' left='650px' top='1100px' zIndex='10' as='b'>One App<br></br>multiple services</Text>
       </div>
          <Text fontSize='xl'color='#5e646a'>A great earning potential with the opportunity to grow your<br></br> business with minimal one time investment and zero working<br></br> capital</Text>
    </Box>
    <Box>
       <SimpleSidebar/>
    </Box>

     </>
  )
}

export default MobileBody