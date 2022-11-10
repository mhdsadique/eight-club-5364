
import { AspectRatio, Box, Button, Center, Container, Flex, Heading, HStack, Image, Menu, MenuButton,
     MenuItem, MenuList,Spacer,Stack,Text, Feature, SimpleGrid} from '@chakra-ui/react'
     import {ChevronDownIcon} from '@chakra-ui/icons'
     import VideoPlayer from 'react-video-js-player';
import { Link, NavLink } from 'react-router-dom';

export const Home=()=>{
    return(
        <Box>
        
            <Box bgColor={'white'} position="fixed" w="100%">
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
                 <Link to={"/login"}>
                <Button size='lg' colorScheme='teal' variant='outline'>Log in</Button>
                 </Link>
                 <NavLink to={'/login'}>

                <Button size='lg' colorScheme='whatsapp'>Sign Up </Button>
                 </NavLink>
                </HStack>
            </Flex>
            </Box>   
            </Flex>
        </Box>
            <Stack paddingTop={'130px'} spacing={'30px'} direction='column' align='center'>
            <Heading as='h2' size='xl'   >Email Sandbox Service</Heading>
                {/* <Text fontSize='xl'>Email Sandbox Service</Text> */}
                <Heading as='h4' size='md'>Capture SMTP traffic from staging and dev environments</Heading>
                <Heading as='h4' size='md'>Automate test flows and scenarios with flexible API</Heading>
                <Heading as='h4' size='md'>Analyze email content for spam score and validate HTML/CSS</Heading>
                <Spacer/>
                <Button position={''} marginTop={'30px'} colorScheme='whatsapp'>Sign Up for Free</Button>
                <Spacer/>
                </Stack>
                <Spacer/>
                {/* ----------------- */}
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
                  
                {/* <div>
                <VideoPlayer
                    // controls={true}
                    src={"https://youtu.be/g5o0ixCi4tg"}
                    poster={'https://mailtrap.io/wp-content/uploads/2021/05/img__homepage-1024x610.png'}
                    width="720"
                    height="420"/>
                  </div>         */}
                    
                  <Center>
                  <Box marginTop={'100px'} w={'50%'} h='400px'>
  <iframe width='100%' height={'100%'}
    title='naruto'
    src='https://www.youtube.com/embed/g5o0ixCi4tg'
    allowFullScreen/>
    </Box>
    </Center>
     <Center>
    <Heading size='2xl' marginTop={'100px'} w={'35%'}>Email testing challenges that Mailtrap Sandbox solves</Heading>
     </Center>
     
     <SimpleGrid paddingTop={'100px'} columns={2} spacing={10} margin='auto' justifyContent='center' w={'70%'}>
  <Box>
    <Heading size='md'>Configure your testing environment in 5 minutes</Heading>
    <Text>Each account comes with an individual testing environment. Integrate it with your app in just a few clicks.</Text>
  </Box>
  <Box>
  <Heading size='md'>Keep all testing data organized in one place</Heading>
    <Text>Create individual inboxes for different environments or review servers and group them into relevant projects.</Text>
  </Box>
  <Box  >
  <Heading size='md'>Quickly integrate with Sandbox API</Heading>
    <Text>Get started quickly with our well-documented API and configure automated testing with unlimited API calls.</Text>
  </Box>
  <Box  >
  <Heading size='md'>Dig into both the content and source of your emails</Heading>
    <Text>View messages, check spam scores, validate headers, analyze the HTML support across email clients, and more.</Text>
  </Box>
  <Box  >
  <Heading size='md'>Easily share test emails with your team</Heading>
    <Text>Manage access to your inboxes for colleagues or clients. Send selected test emails to whitelisted real recipients.</Text>
  </Box>
  <Box  >
  <Heading size='md'>Test your email sending service</Heading>
    <Text>Send emails to Mailtrap Email Sandbox directly from your CRM or email sending service. Simulate sending to multiple recipients.</Text>
  </Box>
  </SimpleGrid>
  <Box margin={'auto'} w='80%'>
  <Heading marginTop={'100px'} size='lg'>  Setup takes less than 5 minutes</Heading>
  <Text>Mailtrap Sandbox is compatible with any app or framework that supports SMTP</Text>
  <Box>
    <Flex>
    <Image src='https://mailtrap.io/wp-content/uploads/2021/03/setup-final-700x502.png'/>
    <SimpleGrid paddingTop={'100px'} columns={1} spacing={10} margin='auto' justifyContent='center' w={'70%'}>
    <Heading size='md'>1. Select your integration from 20+ code samples or copy SMTP credentials</Heading>
    <Heading size='md'>2. Paste the configuration to your project</Heading>
    <Heading size='md'>3. Run your email sending code</Heading>
    <Heading size='md'>4. Instantly receive a message in your Sandbox inbox</Heading>
    </SimpleGrid>
    </Flex>
  <Box>
  </Box>
  </Box>
  </Box>
                {/* ----------------- */}
                <Box marginTop={'100px'} >

    <Heading size='lg'>How different teams use Email Sandbox</Heading>
                  <Center>
        <Image src='https://mailtrap.io/wp-content/uploads/2021/03/img_team.svg' />
                  </Center>
                </Box>
{/* ---------------------- */}
                <Box  marginTop={'100px'}  h={'300px'}  w={'100%'} bgColor={'#1a2e44'}>
                  <Flex alignItems={'center'} justifyContent='center'>
                  <Box >
                    <Heading color={'white'}>Create Your Free AccountIn 3 Clicks</Heading>
                    <Button position={''} size='lg' colorScheme='whatsapp'>Sign Up Now</Button>
                  </Box>
                  {/* <Box> */}
                    <Image w={'300px'}  src='https://mailtrap.io/wp-content/uploads/2021/01/img__cta.svg' />
                  {/* </Box> */}
                  </Flex>
                </Box>
      {/* ------------- */}
                <Container marginTop={'100px'}>
                  <Flex gap={10}>
                  <Box boxSize='lg'>
                    <Image boxSize='200px' src='https://mailtrap.io/wp-content/uploads/2021/04/mailtrap-new-logo.svg'/>
                  </Box>
                  <Box>
         <Heading size='lg'>Mailtrap</Heading>
              <Text>Pricing</Text>
              <Text>Changelog</Text>
              <Text>Status</Text>
              <Text>Terms of Service</Text>
              <Text>Terms of Service</Text>
              <Text>Information</Text>
              <Text>Navigational</Text>
                  </Box>
                  <Box>
         <Heading size='lg'>Railsware Experience</Heading>
              <Text>Mailtrap Blog</Text>
              <Text>Changelog</Text>
              <Text>Mailtrap Blog</Text>
              <Text>Careers – Railsware</Text>
              <Text>Information</Text>
              <Text>Hiring</Text>
                  </Box>
                  <Box>
                    <Heading size={'lg'}>Contact</Heading>
                    <Text>email:support@mailtrap.io</Text>
                  </Box>
                  </Flex>
                </Container>
  </Box>
    )
}