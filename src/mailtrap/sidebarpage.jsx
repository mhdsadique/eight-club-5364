import { CalendarIcon, DragHandleIcon, EditIcon, EmailIcon, ExternalLinkIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { Box, Button, Image, Select } from "@chakra-ui/react"
import { Link } from "react-router-dom"


export const Sidebar=()=>{
    return(
        <>
               <Box w={'250px'} textAlign={'start'} bg='#1a2e44' color={'white'} h='100%'>
            <Image src="https://mailtrap.io/wp-content/uploads/2021/04/mailtrap-new-logo.svg" />
        <br/>
        <Link to='/mailtrap'>
        <Button  leftIcon={<DragHandleIcon />} colorScheme='' variant='solid'>Home</Button>
        </Link>
       {/* <Heading size='md'>Home</Heading> */}
       <br/>
       <Link to='/billing'>
       <Button leftIcon={<EmailIcon />} colorScheme='' variant='solid'>Email API</Button>
   
       </Link>
       {/* <Heading size='md'>Email API</Heading> */}
       <br/>
       <Link to='/sandbox'>
       <Button leftIcon={<CalendarIcon />} colorScheme='' variant='solid'>Sandbox</Button>
       {/* <Heading size='md'>Sandbox</Heading> */}
       </Link>
       <br/>
       {/* <Heading size='md'>Billing</Heading> */}
       <Link to='/billing'>
       <Button leftIcon={<EditIcon />} colorScheme='' variant='solid'>Billing
       </Button>

       </Link>
       <br/>
       {/* <Heading size='md'>User Management</Heading> */}
       <Button leftIcon={<TriangleUpIcon />} colorScheme='' variant='solid'>User Management</Button>

       <br/>
       {/* <Heading size='md'>API</Heading> */}
       <Button leftIcon={<TriangleUpIcon />} colorScheme='' variant='solid'>API</Button>
    
       <br/>
       <Button leftIcon={<ExternalLinkIcon />} colorScheme='' variant='solid'>Account Setting</Button>
       <br/>
           </Box>
        </>
    )
}