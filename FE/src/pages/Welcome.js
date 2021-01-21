import React from 'react';
import {
  Box,
  Text,
  Center,
  Button,
} from '@chakra-ui/react';
import '../components/MainSection.css';
import {  MdSend } from 'react-icons/md';
import SessionService from '../Services/SessionService';

function Welcome(props) {

  const islogged=SessionService.isAuthenticated();
  console.log(islogged);
  
  if(!islogged){
    return (
      <>
        <div className="main-section">
          <Box pt="150px" h="300px">
            <Center>
              <Text pl="20px" fontSize="9xl" color="white">
                Welcome!
              </Text>
            </Center>
            <Center>
              <Text pt="30px" fontSize="5xl" color="white">
                Send a cheque?
              </Text>
            </Center>
            <Center>
              <Button
                mt="20px"
                rightIcon={<MdSend />}
                colorScheme="red"
                variant="solid"
                onClick={()=> props.history.push("/SignIn")}
              >
                Login
              </Button>            
            </Center>
            <Center>
              <Button
                mt="20px"
                rightIcon={<MdSend />}
                colorScheme="red"
                variant="solid"
              >
                SignUp
              </Button>            
            </Center>
            
          </Box>
        </div>
      </>
    );

  }else{
    return (
      <>
        <div className="main-section">
          <Box pt="150px" h="300px">
            <Center>
              <Text pl="20px" fontSize="9xl" color="white">
                Welcome!
              </Text>
            </Center>
            <Center>
              <Text pt="30px" fontSize="5xl" color="white">
                Send a cheque?
              </Text>
            </Center>
            <Center>
              <Button
                mt="20px"
                rightIcon={<MdSend />}
                colorScheme="red"
                variant="solid"
                onClick={()=> props.history.push("/dashboard")}
              >
                Dashboard
              </Button>            
            </Center>
            
          </Box>
        </div>
      </>
    );

  }
}

export default Welcome;
