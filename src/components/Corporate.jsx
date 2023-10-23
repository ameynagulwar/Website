'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Input,
  Checkbox,
  FormLabel,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react'

import reCaptchaImage from "../images/RecaptchaLogo.svg.png"
import digitalCash from "../images/digitize-cash-collection.png"
import increaseIndia from "../images/increase-market-penetration.png"
import digitalOrder from "../images/digitize-order-placement.png"
import manNetwork from "../images/manNetwok.png"
import bajajImage from "../images/1280px-Bajaj_Finserv_Logo.svg_-1.png"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '20%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                color: '#1c539e'
              }}>
              Last Mile Infrastructure
            </Text>
            <br />
            <Text as={'span'} color={'#1c539e'}>
              for Businesses
            </Text>
          </Heading>
          <Text color={'black'}>
          Multiple businesses of all sizes- from startups to large enterprises- use India’s largest agent network of 50,00,000 retailers to scale their business, optimize operational costs and develop new markets. High-end technology simplified for ease of use.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
             <Input type='email' placeholder='Enter Your Email' width='500px' height='75px'/>
             <Button width='150px' height='75px' background='#82e368' color='white' position={'absoulte'} left={"200px"}>Get in touch</Button>
          </Stack>
          <Stack border={'1px solid #d3d3d3'} width={'400px'} direction={'row'} height={'75px'} display={'flex'} justifyContent={'space-between'} spacing={10} alignItems={'center'}>
             <Checkbox colorScheme='green' margin={'10px'} size='lg'>I'm not robot</Checkbox>
             <Image src={reCaptchaImage} width={'50px'} height='50px'/>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          {/* <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          /> */}
          <Box
            position={'relative'}
            height={'410px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
      <Text fontSize='xl'>our solutions</Text>
      <Text fontSize='4xl'>Think Last Mile, Think PayNearby</Text>
      <SimpleGrid spacing={40} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card width={"400px"} height={"500px"} border={"none"}>
  <Image
      src={digitalCash}
      alt='digital-cash-image'
      borderRadius='lg'
      height={"250px"}
      width={"200px"}
     />
    <CardHeader>
      <Heading size='md'>Digitize cash collection</Heading>
    </CardHeader>
    <CardBody>
      <Text>Enable customers and collection agents to deposit cash at P...</Text>
    </CardBody>
    <CardFooter>
      <Button color={'#1c539e'}>Learn more</Button>
    </CardFooter>
  </Card>
  <Card width={"400px"} height={"500px"} border={"none"}>
  <Image
      src={increaseIndia}
      alt='digital-india-image'
      borderRadius='lg'
      height={"250px"}
      width={"200px"}
     />
    <CardHeader>
      <Heading size='md'>Increase market penetration at the last mile</Heading>
    </CardHeader>
    <CardBody>
      <Text>Distribute sachetize content through PayNearby’s last mile ...</Text>
    </CardBody>
    <CardFooter>
      <Button color={'#1c539e'}>Learn more</Button>
    </CardFooter>
  </Card>
  <Card width={"400px"} height={"500px"} border={"none"}>
  <Image
      src={digitalOrder}
      alt='digital-order-image'
      borderRadius='lg'
      height={"250px"}
      width={"200px"}
     />
    <CardHeader>
      <Heading size='md'>Digitize order placement and payment</Heading>
    </CardHeader>
    <CardBody>
      <Text>Enable 3X more efficiency in order processing and cash flow...</Text>
    </CardBody>
    <CardFooter>
      <Button color={'#1c539e'}>Learn more</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
    <Box margin={"50px"} display={"flex"} justifyContent={"center"}>
        <Button size='md'height='48px'width='200px'border='2px'borderColor='green.500'>Veiw all Solutions</Button>
    </Box>
     <Box width={"1100px"} marginTop={"200px"} height={"600px"} display={"flex"} flexDirection={"column"}  justifyContent={"center"}>
        <Text fontSize='lg'  as='b'>Why PayNearby</Text><br/>
        <Text fontSize='4xl' as='b' color={'#1c539e'}>Technology driven, customer first approach to last mile connectivity and solution</Text>
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
           <Box width={"350px"} height={"300px"} >
              <Image src={manNetwork} width={"50px"} height={"50px"}/>
              <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
              <Text fontSize='xl'>With over 50,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country</Text>
           </Box>
           <Box width={"350px"} height={"300px"} >
              <Image src={manNetwork} width={"50px"} height={"50px"}/>
              <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
              <Text fontSize='xl'>With over 50,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country</Text>
           </Box>
           <Box width={"350px"} height={"300px"} > 
              <Image src={manNetwork} width={"50px"} height={"50px"}/> 
              <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
              <Text fontSize='xl'>With over 50,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country</Text>
           </Box>
           <Box width={"350px"} height={"300px"} >
              <Image src={manNetwork} width={"50px"} height={"50px"}/>
              <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
              <Text fontSize='xl'>With over 50,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country</Text>
           </Box>
           <Box width={"350px"} height={"300px"} >
              <Image src={manNetwork} width={"50px"} height={"50px"}/>
              <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
              <Text fontSize='xl'>With over 50,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country</Text>
           </Box>
           <Box width={"350px"} height={"300px"} >
              <Image src={manNetwork} width={"50px"} height={"50px"}/>
              <Text fontSize='2xl' as='b'>Largest Agent Network:</Text>
              <Text fontSize='xl'>With over 50,00,000 retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country</Text>
           </Box>
        </Box>
        <Box margin={"20px"} display={"flex"} justifyContent={"center"}>
            <Button size='md'height='48px'width='200px'border='2px'borderColor='green.500'>Veiw all Features</Button>
        </Box>
     </Box>
     <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={5} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text color={'#1c539e'}>
             Testimonial
            </Text>
            <br />{' '}
            <Text fontSize='lg'>
              - By Tanaji Khot
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
           National Lead - Banking relationship projects, Repayments Management and BRS
          </Text>
          <Image src={bajajImage} width={"400px"}/>
        </Stack>
      </Flex>
      <Flex p={5} flex={1} align={'center'} justify={'center'}>
      <Text fontSize='lg'>The collaboration has also led to a high service deliverance rate in the cash collection vertical. PayNearby’s client servicing team is fully equipped and resolves issues with a 95% success rate in less than 2 hours. With our partnership, we will be able to further enhance the customer experience and offer payment options both digitally and at physical outlets. Going forward we plan to add more services to digitize cash through PayNearby retailers, I wish PayNearby all the very best look forward to a mutually beneficial partnership.</Text>
      </Flex>
    </Stack>
    </Container>
  )
}

// const PlayIcon = createIcon({
//   displayName: 'PlayIcon',
//   viewBox: '0 0 58 58',
//   d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
// })

// const Blob = (props: IconProps) => {
//   return (
//     <Icon
//       width={'100%'}
//       viewBox="0 0 578 440"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}>
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
//         fill="currentColor"
//       />
//     </Icon>
//   )
// }