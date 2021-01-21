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
  Image,
} from '@chakra-ui/react';
import '../components/MainSection.css';
import { MdAddShoppingCart, MdBuild, MdCall, MdSend } from 'react-icons/md';
import Footer from '../components/Footer';

function Welcome() {
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
            >
              Click Here!
            </Button>
          </Center>
        </Box>
      </div>
    </>
  );
}

export default Welcome;
