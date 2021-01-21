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
  AlertDialog,
  Stack,
  Checkbox,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Spinner,
  Tooltip,
} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Alert from '../components/Alert';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  EmailIcon,
  PhoneIcon,
  StarIcon,
} from '@chakra-ui/icons';
import '../components/MainSection.css';
import Footer from '../components/Footer';

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <Sidebar disable={[false, true]} />

        <Box
          borderStyle="solid"
          borderColor="gray.800"
          boarderRadius="200px"
          mt={{ base: '400px', md: '10px' }}
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
            pt='30px'
            mt="-20px"
            borderRadius="20px"
          >
            <Center>
              <Grid templateColumns="repeat(3, 1fr)" gap={20}>
                <Box borderRadius="20px" w="100%" h="100" bg="red.500">
                  <Text color="white" pl="10" pt="10">
                    Last Login :
                  </Text>
                  <Text color="white" pl="3">
                    2021/01/19 20:24
                  </Text>
                </Box>
                <Image
                  boxSize="150px"
                  borderRadius="10px"
                  ml="0px"
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />

                <Box w="100%" h="100" bg="blue.500" borderRadius="20px">
                  <Text color="white" pl="1" pt="10">
                    Password Changed :
                  </Text>
                  <Text color="white" pl="3">
                    2020/08/01 20:24
                  </Text>
                </Box>
              </Grid>
            </Center>
            <Center mt='30px'>
              <Alert />
            </Center>
            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              mt="50px"
              borderRadius="10px"
            >
              <Tooltip label="Name" fontSize="md">
                <Text pl="2px" color="gray.900" isTruncated>
                  <IconButton
                    m="10px"
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Send email"
                    icon={<ArrowRightIcon />}
                  />
                  C.P.Amarasena
                </Text>
              </Tooltip>
            </Box>
            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              borderRadius="10px"
            >
              <Tooltip label="Phone number" fontSize="md">
                <Text pl="2px" color="gray.900" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="green"
                    aria-label="Call"
                    icon={<PhoneIcon />}
                  />
                  +94715050200
                </Text>
              </Tooltip>
            </Box>

            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              borderRadius="10px"
            >
              <Tooltip label="E-Mail" fontSize="md">
                <Text pl="2px" color="gray.700" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="blue"
                    aria-label="Send email"
                    icon={<EmailIcon />}
                  />
                  chalindumalshika@gmail.com
                </Text>
              </Tooltip>
            </Box>

            <Box
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              h="70px"
              m="10px"
              borderRadius="10px"
            >
              <Tooltip label="Address" fontSize="md">
                <Text pl="2px" color="gray.700" isTruncated>
                  <IconButton
                    m="10px"
                    colorScheme="red"
                    aria-label="Send email"
                    icon={<CheckCircleIcon />}
                  />
                  No: 96/C,Avissawella, Colombo
                </Text>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Dashboard;
