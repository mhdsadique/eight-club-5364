import { Box, Flex } from "@chakra-ui/react"
import { Allmailtraprout } from "./mailrout"
import { MailtrapPage } from "./mailtrap"


export const Mailhome=()=>{
    return (
        <>
        <Box >
         <Flex>
            <MailtrapPage/>
           <Allmailtraprout/>
         </Flex>
        </Box>
        </>
    )
}