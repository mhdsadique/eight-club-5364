

import { CalendarIcon, DeleteIcon, EmailIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading } from "@chakra-ui/react"
import { Sidebar } from "./sidebarpage"

export const Sandbox=()=>{
    return (
        <>
   <Flex>
        <Box>

        <Sidebar/>
        </Box>
        <Box h={'770px'} width={'80%'} margin='auto' >
        <Heading textAlign={'start'}>Projects</Heading>
        <Heading textAlign={'start'} marginTop={'20px'} size={'sm'}><CalendarIcon/> My project</Heading>
         <table style={{border:'solid 1px black',marginTop:"20px",width:"100%"}}>
            <tr style={{border:'solid 1px black'}}>
            <th>Inboxes</th>
            <th>Totel Sent</th>
            <th>Messages</th>
            <th>Max size</th>
            <th>Action</th>
            </tr>
            <tr style={{border:'solid 1px black'}}>
                <td>My Inbox</td>
                <td><EmailIcon/>0/0 </td>
                <td>50</td>
                <td>Empty</td>
                <td><DeleteIcon/></td>
            </tr>
         </table>

        </Box>
</Flex>
        </>
    )
}



