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

function ChangeDetails() {
  const [hasError, setHasError] = React.useState(false);
  const [show, setShow] = React.useState(false);

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
            <h1>Change Details!</h1>
          </Center>
          <Divider mb="50px" orientation="horizontal" />

          <form action="submit">
            <Stack spacing={3}>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement>
                    <i class="fas fa-user"></i>
                  </InputLeftElement>

                  <Input
                    type="text"
                    placeholder="Name"
                    aria-label="name"
                    errorBorderColor="crimson"
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement>
                    <i class="fas fa-phone-alt"></i>
                  </InputLeftElement>

                  <Input
                    type="text"
                    placeholder="Phone Number"
                    aria-label="phoneNumber"
                    errorBorderColor="crimson"
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement>
                    <i class="fas fa-map-marker-alt"></i>
                  </InputLeftElement>

                  <Input
                    type="text"
                    placeholder="Address"
                    aria-label="address"
                    errorBorderColor="crimson"
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired pb="70px">
                <InputGroup>
                  <InputLeftElement children={<LockIcon />} />
                  <Input
                    isInvalid
                    type={show ? 'text' : 'password'}
                    placeholder="Current Password"
                    aria-label="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShow(!show)}
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Checkbox pt='0px' isRequired>Confirm
              </Checkbox>
              <small>Confirm before updating</small>
              
              <Link as={ReactRouterLink} to="/changePassword">
                <Button
                  w="100%"
                  boxShadow="dark-lg"
                  colorScheme="red"
                  type="submit"
                  onClick={() => setHasError(!hasError)}
                >
                  Update
                </Button>
              </Link>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default ChangeDetails;
