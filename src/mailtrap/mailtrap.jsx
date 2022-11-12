import { CalendarIcon, DragHandleIcon, EditIcon, EmailIcon, ExternalLinkIcon, PhoneIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Flex, Heading, HStack, Image, } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
import { Sidebar } from "./sidebarpage"
import { Allmailtraprout } from "./mailrout"

export const MailtrapPage=()=>{
    return(
        <>
        <Box w={'100%'} >
            <Flex justifyContent={'space-between'}>
              <Box>

            <Sidebar/>
              </Box>
            <Box w={'80%'} h={"770px"}>
            <Heading marginBottom={'50px'} textAlign={'start'} size='md'>Welcome!</Heading>
                 <Flex justifyContent={'space-around'}>           
               <Box >
        <Heading size={'md'}>Sandbox</Heading>
                <Accordion allowToggle marginTop={'20px'}>
  <AccordionItem >
    <h2>
      <AccordionButton >
        <Box flex='1' textAlign='left'>
        Fake SMTP Server
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        QA Automation
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  
    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Preview and validation HTML/CSS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Inbox email address
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    
    </AccordionPanel>
  </AccordionItem>
</Accordion>
               </Box>
               <Box>
               <Heading size={'md'}>Email API</Heading>
               
               <Accordion allowToggle  marginTop={'20px'}>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        SMTP Service, API/SDK
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
   
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
        <AccordionButton>
        <Box flex='1' textAlign='left'>
        SPF, DKIM, DMARC, Dedicated IP
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
   
    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Deliverability Alerts
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
   
    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Email content and logs
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
   
    </AccordionPanel>
  </AccordionItem>
</Accordion>
               </Box>
                 </Flex>
            </Box>
                 
            </Flex>
        </Box>
          </>
    )
}

