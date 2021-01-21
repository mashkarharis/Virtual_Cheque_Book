import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Button,
  useColorMode,
  IconButton,
  useDisclosure,
  ReactRouterLink,
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SettingsIcon } from '@chakra-ui/icons';

import { Avatar, AvatarBadge } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const MenuItems = ({ children }) => (
    <Button
      mt={{ base: 4, md: 0 }}
      mr={6}
      display="block"
      colorScheme="teal.500"
      variant="link"
    >
      {children}
    </Button>
  );

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.700"
      color="white"
      position="fixed"
      top="0"
      width="100%"
      zIndex="10000"
    >
      <Flex align="center" mr={5}>
        <Link as={ReactRouterLink} to="/">
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
            {props.heading}
            <i class="fab fa-typo3" />
          </Heading>
        </Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        pl="20px"
      >
        <MenuItems>
          <Link as={ReactRouterLink} to="/">
            Home
          </Link>
        </MenuItems>
        <MenuItems>
          <Link as={ReactRouterLink} to="/Dashboard">
            Dashboard
          </Link>
        </MenuItems>
        <MenuItems>Help me</MenuItems>
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <IconButton
          aria-label="Call Segun"
          size="md"
          icon={colorMode === 'light' ? <MoonIcon /> : <SettingsIcon />}
          mr={{ base: '5px', md: '20px' }}
          variant="outline"
          onClick={toggleColorMode}
        />

        <Button bg="transparent" border="1px">
          Log out
        </Button>
      </Box>
    </Flex>
  );
}

export default Navbar;
