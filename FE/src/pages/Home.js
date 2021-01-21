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
} from '@chakra-ui/react';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
     <MainSection />
     <Footer/>
    </>
  );
}

export default Home;
