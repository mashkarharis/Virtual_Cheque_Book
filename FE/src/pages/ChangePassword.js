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
} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { MdArrowBack } from 'react-icons/md';

function ChangePassword() {
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
            <h1>Change Your Password!</h1>
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
                    placeholder="User ID"
                    aria-label="userid"
                    isInvalid
                    errorBorderColor="crimson"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<LockIcon />} />
                  <Input
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
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<LockIcon />} />
                  <Input
                    type={show ? 'text' : 'password'}
                    placeholder="New Password"
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
                <FormHelperText>
                Must be 8-15 characters long
                </FormHelperText>
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<LockIcon />} />
                  <Input
                    type={show ? 'text' : 'password'}
                    placeholder="Re-Enter NewPassword"
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
                <FormHelperText>
                  Re-Enter your new password to confirm
                </FormHelperText>
                
              </FormControl>
              <Checkbox pt='70px' pb='30px' isRequired>Confirm</Checkbox>
              <Button
              mt='50px'
                colorScheme="blue"
                type="submit"
                onClick={() => setHasError(!hasError)}
              >
                Change
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default ChangePassword;
