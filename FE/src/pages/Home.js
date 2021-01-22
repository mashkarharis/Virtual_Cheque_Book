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
import SessionService from '../Services/SessionService';
import { Redirect } from 'react-router-dom';


function Home(props) {
  const islogged=SessionService.isAuthenticated();
  console.log(islogged);

  if(!islogged){
    return (
      <Redirect
                to={{ pathname: '/', state: { from: props.location } }}
            />
    );
  }
  return (
    <>
     <MainSection />
     <Footer/>
    </>
  );
}

export default Home;
