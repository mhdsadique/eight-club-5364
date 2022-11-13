

import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { Planboxex } from "./plansbox"
import { Sidebar } from "./sidebarpage"



export const Billing=()=>{
    const navling=useNavigate()
    const viewplan=()=>{
   
        navling("/payment")
    }
    return (
        <>
<Flex>
        <Box>

        <Sidebar/>
        </Box>
        <Box>
        <SimpleGrid columns={4}>
     <Planboxex  a={"Free"}b={"For users who want to evaluate Mailtrap or intend to apply it on a personal side project."} c={"$0"}
     d={"per month"} e={viewplan}f={"0 Team Members"}g={"7 Days of Email Logs"}h={"API and SMTP relay"}i={"Webhooks"}
     j={"Suppression Management"}k={"Email Tracking and Analytics"} />
       
       <Planboxex  a={"Individual 10K"}b={"For freelancers & individuals working in a one-person team."} c={"$10"}
     d={"per month"} e={viewplan}f={"0 Team Members"}g={"15 Days of Email Logs"}h={"API and SMTP relay"}i={"Webhooks"}
     j={"Suppression Management"}k={"Email Tracking and Analytics"} />

<Planboxex  a={"Business 100K"}b={"For an established team where users may invite others to join their project, which has a moderate volume of emails to send."} c={"$85"}
     d={"per month"} e={viewplan}f={"1000 Team Members"}g={"30 Days of Email Logs"}h={"API and SMTP relay"}i={"Webhooks"}
     j={"Suppression Management"}k={"Email Tracking and Analytics"} />

<Planboxex  a={"Enterprise 1.5M"}b={"For large organizations looking for a reliable system to send emails on a large-scale backed up by prime limits and rich collaboration possibilities."} c={"$750"}
     d={"per month"} e={viewplan}f={"1000 Team Members"}g={"60 Days of Email Logs"}h={"API and SMTP relay"}i={"Webhooks"}
     j={"Suppression Management"}k={"Email Tracking and Analytics"} />
</SimpleGrid>
</Box>
</Flex>
        </>
    )
}