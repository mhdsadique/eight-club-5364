import { Box, Button, Center, Flex, FormControl, FormLabel, HStack, Image, Input, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "./athcontext";
import { EmailIcon, FaFacebook, FaTwitter, } from '@chakra-ui/icons'
function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {authState,loginUser}=useContext(AppContext)
  const [da,serta]=useState(false)
  const [openinput,setopeninput]=useState(false)
  const navigate=useNavigate()
   const chanceinput=()=>{
    setopeninput(!openinput)
   }
    console.log(openinput)
  const submitData=(e)=>{
    e.preventDefault()
    serta(true)

   fetch("https://reqres.in/api/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email,password})
   })
  //  console.log("done")
  .then((res)=>res.json())
  .then((res)=>{
    if(res.token){
      loginUser(res.token)
      navigate("/dashboard")
    }
  })
    .catch(err=>console.log(err))
  }

  return (
    <div className="login-page">


<Box bgColor={'white'} position="fixed" w="100%" >
             <Flex justifyContent='space-between'>
            <Box  marginLeft={'100px'}  w='15%' p={4} color='black'>
            <Image src="https://mailtrap.io/wp-content/uploads/2021/04/mailtrap-new-logo.svg" />
               </Box>
               <Box  w='50%' p={4}> 
<HStack w={'25%'}>
                 <Link to={"/login"}>
                <Button size='lg' colorScheme='teal' variant='outline'>Log in</Button>
                 </Link>
                 <NavLink to={'/login'}>

                <Button size='lg' colorScheme='whatsapp'>Sign Up </Button>
                 </NavLink>
                </HStack>
    
            </Box>   
            </Flex>
        </Box>
{/* ------------ */}
            <Box paddingTop={'120px'}>
  <VStack>
     <Button  size='md' height='48px'  width='250px'border='2px' leftIcon={''} colorScheme='gray' variant='solid'>Google Account</Button>
  {/* <Button colorScheme='twitter' leftIcon={<FaTwitter />}>Twitter</Button> */}
  <Button  size='md' height='48px'  width='250px'border='2px' colorScheme='facebook' leftIcon={''}>
    Facebook
  </Button>
  <Button  size='md' height='48px'  width='250px'border='2px' colorScheme='twitter' leftIcon={''}>
    Twitter</Button>
     <Button onClick={()=>chanceinput()} size='lg' height='48px' width='250px' border='2px' leftIcon={<EmailIcon/>} colorScheme='gray' variant='solid'>Email</Button>
</VStack>
                </Box>
{/* -------------------- */}
      {
        openinput?<Box  paddingTop={'80px'}>
      <form   className="form" onSubmit={submitData}>
        <div  >
          
        
          <Text>Email</Text>
        <Input w={'30%'} size='md' value={email} onChange={e=>setEmail(e.target.value)} data-testid="email-input" type="email" placeholder="email" />
          
        </div>
        <Box>
          <Text>Password</Text>
           
            <Input  size='md'  w={'30%'}
            value={password} onChange={e=>setPassword(e.target.value)}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
        
        </Box>
        <div>
          <Input  w={'30%'} size='md' disabled={da} type='submit'/>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>

      </Box>:""
        }
    </div>
  );
}
export default Login;
