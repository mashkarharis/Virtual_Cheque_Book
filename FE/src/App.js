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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ChangePassword from './pages/ChangePassword';
import ChangeDetails from './pages/ChangeDetails';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Navbar heading='onlineCheque'/>
        <Switch>
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/home" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/changePassword" component={ChangePassword} />
          <Route path="/changeDetails" component={ChangeDetails} />
          <Redirect from='/*' to="/" />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
