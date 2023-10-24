'use client'

import {
    Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import contactUsImage from "../images/contact-us-img.png"
import facebookIcon from "../images/facebook_4494475.png"
import linkdienIcon from "../images/linkedin_3536505.png"
import twitterIcon from "../images/twitter_4494477.png"
import youtubeIcon from "../images/youtube_4494485.png"
import contactTopImage from "../images/contact-top-icon.png"
import telephoneImage from "../images/telephone.png"
import reCaptchaImage from "../images/RecaptchaLogo.svg.png"
import googlePlay from "../images/google-play.png"
import { PhoneIcon } from '@chakra-ui/icons'
import Solution4 from "../images/download-app.png"

export default function SplitScreen() {
  return (
    <>
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
             Let's connect to <br/>
             create impact 
            </Text>
            <br />{' '}
          </Heading>
             <Text fontSize={'lg'} >Regd. Office</Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                 1AB, Arena House,<br/>
                 Road No. 12, MIDC,<br/>
                 Andheri (East),<br/>
                 Mumbai - 400 093
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Button
             size='md'
             height='48px'
             width='200px'
             border='2px'
             borderColor='blue.500'
             colorScheme='blue.400'
             color='blue.500'
          >
           Help & Support
        </Button>  
          </Stack>
          <Stack direction={'row'} spacing={5}>
            <Image src={facebookIcon} width={"40px"} height={"40px"}/>
            <Image src={twitterIcon} width={"40px"} height={"40px"}/>
            <Image src={linkdienIcon} width={"40px"} height={"40px"}/>
            <Image src={youtubeIcon} width={"40px"} height={"40px"}/>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} p={8}>
        <Image
          height={"400px"}
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            contactUsImage
          }
        />
      </Flex>
    </Stack>
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }} backgroundColor={"#c7f7ee"} margin={"auto"}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={"800px"} maxW={"800px"}  marginLeft={"100px"}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
               Attention! <br/>
               PayNearby cares about your safety.
            </Text>
            <br /><br/>{' '}
            <Text fontSize='xl'>We will call you only from the landline number mentioned below:</Text>
          </Heading>
          <Stack direction={'row'} spacing={5}>
            <Image src={telephoneImage} width={"20px"} height={"20px"}/>
            <Text fontSize='md'>+91 4466909009</Text>
            <Image src={telephoneImage} width={"20px"} height={"20px"}/>
            <Text fontSize='md'>+91 6516609090</Text>
            <Image src={telephoneImage} width={"20px"} height={"20px"}/>
            <Text fontSize='md'>+91 3366909100</Text>
            <Image src={telephoneImage} width={"20px"} height={"20px"}/>
            <Text fontSize='md'>+91 4438038038</Text>
          </Stack>
          <Text fontSize='lg' as='i'>Note: We will never call you from any number.</Text>
        </Stack>
      </Flex>
      <Flex flex={1} p={8}>
        <Image
          height={"400px"}
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            contactTopImage
          }
        />
      </Flex>
    </Stack>
    <Stack marginLeft={"130px"} marginTop={"80px"} marginBottom={"80px"}>
        <Text fontSize={'3xl'} color={'#1c539e'} as='b'>Join PayNearBy</Text>
        <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
             <Input type='number' placeholder='Enter Your Number' width='500px' height='75px'/>
             <Button width='150px' height='75px' background='#82e368' color='white' position={'absoulte'} left={"200px"}>Verify</Button>
        </Stack>
        <Stack border={'1px solid #d3d3d3'} width={'400px'} direction={'row'} height={'75px'} display={'flex'} justifyContent={'space-between'} spacing={10} alignItems={'center'}>
             <Checkbox colorScheme='green' margin={'10px'} size='lg'>I'm not robot</Checkbox>
             <Image src={reCaptchaImage} width={'50px'} height='50px'/>
        </Stack>
    </Stack>
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }} backgroundColor={"#f7f7f7"} margin={"auto"}>
      <Flex p={1} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={"700px"} maxW={"700px"}  marginLeft={"100px"}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
                color: 'blue.500'
              }}>
               Download our Apps
            </Text>
            <br /><br/>{' '}
            <Text fontSize='xl' as='b'>PayNearby App</Text>
          </Heading>
          <Stack direction={'row'} spacing={5}>
              <Text fontSize='xl'>Become a PayNearby powered retailer & earn extra income by offering digital banking and financial services at your retail store. Download the app now!</Text>
          </Stack>
           <Image src={googlePlay} width={"150px"}/>
        </Stack>
      </Flex>
      <Flex flex={1} p={50}>
          <Stack marginTop={"300px"}>
             <Text fontSize='xl' as='b'>NeoDukaan App</Text>
             <Text fontSize='xl'>Upgrade your shop with the latest store management and digital payment package. Offer the latest digital payment options, manage customer credits efficiently and take your store online. Become new Bharat's Digital Shop.</Text>
             <Image src={googlePlay} width={"150px"}/>
          </Stack>
      </Flex>
    </Stack>
    <Box>
                <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text
                                    margin={"-0.5px"}

                                    as={'span'}
                                    position={'relative'}
                                    _after={{
                                        content: "''",
                                        width: 'full',
                                        height: useBreakpointValue({ base: '20%', md: '30%' }),
                                        position: 'absolute',
                                        bottom: 1,
                                        left: 0,
                                        bg: 'blue.400',
                                        zIndex: -1,
                                    }}>

                                </Text>

                                <Text color={'blue.400'} as={'span'} >
                                    Download PayNearby now
                                </Text>{' '}
                            </Heading>
                            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                Use PayNearby app & take charge of all your transactions to grow your business


                            </Text>
                            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                <Input type='phone' placeholder='Enter Phone No.' width='500px' height='66px' border='1px solid blue' />
                            </Stack>
                            <Stack border={'1px solid #d3d3d3'} width={'400px'} direction={'row'} height={'66px'} display={'flex'} justifyContent={'space-between'} spacing={13} alignItems={'center'}>
                                <Checkbox colorScheme='green' margin={'10px'} size='lg'>I'm not robot</Checkbox>
                                <Image src={reCaptchaImage} width={'50px'} height='50px' />
                                <Button width='150px' height='70px' background='#82e368' color='white' position={'absoulte'} left={"200px"}>Get App Link</Button>

                            </Stack>
                        </Stack>

                    </Flex>
                    <Flex flex={1}>

                        <Image width={"100%"} height={"65%"} marginTop={"5rem"} ml={'10px'} src={Solution4} />

                    </Flex>
                </Stack>
            </Box>
    </>
  )
}