import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { Sidebar } from "./sidebarpage"


export const Payment=()=>{
  const navlink =useNavigate()
    const paymentalert=()=>{
        alert("Successfull")
        navlink("/mailtrap")
    }
    return(
        <>
        <Flex>

        <Box h={'770px'}>

        <Sidebar/>
        </Box>
        <Box margin={'auto'}>
        <Heading paddingTop={'30px'} size={'md'}>Add New Card to Proceed</Heading>
        <FormControl w paddingTop={'30px'}>
  <FormLabel>Your Name</FormLabel>
  <Input type='text' size='lg' w={'400px'} />
</FormControl>
<FormControl>
  <FormLabel>Enter Your Card Number</FormLabel>
  <Input type='number' />
</FormControl>
<Button onClick={paymentalert} colorScheme='teal' variant='outline'>
Process Payment
  </Button>
        </Box>
        </Flex>
        </>
    )
}