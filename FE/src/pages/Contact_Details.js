import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Center,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Divider,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Stack,
  Checkbox,
  ReactRouterLink,
} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { MdArrowBack } from 'react-icons/md';
import SessionService from '../Services/SessionService';
import { Redirect } from 'react-router-dom';
import { Card } from '@material-ui/core';

function Contact_Details(props) {

  const [hasError, setHasError] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const islogged = SessionService.isAuthenticated();
  console.log(islogged);

  if (!islogged) {
    return (
      <Redirect
        to={{ pathname: '/', state: { from: props.location } }}
      />
    );
  }
  return (
    <>
      <Sidebar />

      <Box
        borderStyle="solid"
        borderColor="gray.800"
        boarderRadius="200px"
        mt={{ base: '400px', md: '-30px' }}
        ml={{ base: '20px', md: '320px' }}
        pt="150px"
        h="700px"
        mr="20px"
        left="0px"
        backgroundColor="red"
      >
        <Box
          borderStyle="solid"
          borderColor="gray.200"
          borderWidth="2px"
          p="10px"
          pt="30px"
          mt="-20px"
          borderRadius="20px"
        >
          <Center pb="10px">
            <h1>Contact Details</h1>
          </Center>
          <Center >
            <Card>
              <h3>{JSON.parse(SessionService.getdata()).contact_primary + ""}</h3>
              <h3>{JSON.parse(SessionService.getdata()).contact_secondary + ""}</h3>
              <h3>{JSON.parse(SessionService.getdata()).house_no + ""}</h3>
              <h3>{JSON.parse(SessionService.getdata()).street + ""}</h3>
              <h3>{JSON.parse(SessionService.getdata()).city + ""}</h3>
              <h3>{JSON.parse(SessionService.getdata()).postal_code + ""}</h3>
            
            </Card>

          </Center>
        </Box>
      </Box>
    </>
  );
}

export default Contact_Details;
