import { Box, Button, Grid, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react"

export const Planboxex=({a,b,c,d,e,f,g,h,i,j,k,l,m,n})=>{
    return(
        <Box>

        {/* <Grid columns={4}> */}
            <VStack gap={8} h="770px" paddingTop={'40px'} >

        <Heading   size={'md'}>{a}</Heading>
                <Text paddingTop={'50px'} size={'md'}>{b}</Text>
                <Heading size={'md'}>{c}</Heading>
                <Text>{d}</Text>
                <Text>{n}</Text>
                <Button colorScheme='teal' variant='outline' onClick={e}>View Plan</Button>
                {/* <ul> */}
                <Box w={'70%'} textAlign={"start"} margin={'auto'} >

                    <li>{f}</li>
                    <li>{g}</li>
                    <li>{h}</li>
                    <li>{i}</li>
                    <li>{j}</li>
                    <li>{k}</li>
                </Box>
     

            </VStack>
        {/* </Grid> */}
        </Box>
    )
}