
import { Box, Button, Center, Container, Flex, Heading, HStack, Image, Menu, MenuButton,
     MenuItem, MenuList,Spacer,Stack,Text, } from '@chakra-ui/react'
     import {ChevronDownIcon} from '@chakra-ui/icons'
export const Home=()=>{
    return(
        <>
        
            <Box w="100%">
             <Flex justifyContent="space-around">
            <Box    w='15%' p={4} color='black'>
            <Image src="https://mailtrap.io/wp-content/uploads/2021/04/mailtrap-new-logo.svg" />
               </Box>
               <Box  w='50%' p={4}> 
            <Flex justifyContent={'space-between'} >
            <Menu>
  <MenuButton as={Button}  rightIcon={<ChevronDownIcon/>} >
  <Heading as='h5' size='sm'> Email Testing</Heading>
  </MenuButton>
  <MenuList w="200px" h="250px">
    <MenuItem >QA Automation</MenuItem>
    <MenuItem>HTML Check</MenuItem>
    <MenuItem>Fake SMTP Server</MenuItem>
    <MenuItem>Mailtrap API</MenuItem>
  </MenuList>
</Menu>
          
<Heading as='h5' size='sm'>Email API</Heading>
<Heading as='h5' size='sm'>Pricing</Heading>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
    
  <Heading as='h5' size='sm'>Resources</Heading>

  </MenuButton>
  <MenuList w="200px" h="250px">
    <MenuItem>API</MenuItem>
    <MenuItem>case Studio</MenuItem>
    <MenuItem>Blog</MenuItem>
    <MenuItem>Healp</MenuItem>
  </MenuList>
</Menu>
<HStack w={'25%'}>
                <Button size='lg' colorScheme='teal' variant='outline'>Log in</Button>
                <Button size='lg' colorScheme='whatsapp'>Sign Up </Button>
                </HStack>
            </Flex>
            </Box>   
            </Flex>
        </Box>
            <Stack spacing={'30px'} direction='column' align='center'>
            <Heading as='h2' size='xl' marginTop={'30px'} paddingTop={'30px'} >Email Sandbox Service</Heading>
                {/* <Text fontSize='xl'>Email Sandbox Service</Text> */}
                <Heading as='h4' size='md'>Capture SMTP traffic from staging and dev environments</Heading>
                <Heading as='h4' size='md'>Automate test flows and scenarios with flexible API</Heading>
                <Heading as='h4' size='md'>Analyze email content for spam score and validate HTML/CSS</Heading>
                <Spacer/>
                <Button marginTop={'30px'} colorScheme='whatsapp'>Sign Up for Free</Button>
                <Spacer/>
                </Stack>
                <Spacer/>
                <Center>
                <HStack spacing={8} marginTop={'30px'} >
                    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/Rails.svg'></Image>
                    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/Python.svg'></Image>
                    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/NET.svg'></Image>
                    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/Symfony.svg'></Image>
                    <Image src='https://mailtrap.io/wp-content/uploads/2021/04/Laravel.svg'></Image>
                </HStack>
                </Center>
                <Spacer/>
                  

                <video width="320" height="240" > <source src="https://mailtrap.io/wp-content/uploads/2021/05/img__homepage-1024x610.png" type="video/mp4" />
            <source src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" type="video/ogg" /> 
          </video>
                  
          <iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
</iframe>
                          
              
        </>
    )
}