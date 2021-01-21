import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ChangePassword from './pages/ChangePassword';
import ChangeDetails from './pages/ChangeDetails';
import Welcome from './pages/Welcome';
import SessionService from './Services/SessionService';
import SignIn from './pages/signin';

function App(props) {
  SessionService.clearSession();
 //SessionService.initSession({"A":123});
  

  return (
    <Router>
      <ChakraProvider>
        <Navbar heading='onlineCheque'/>
        <Switch>
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/home" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/changePassword" component={ChangePassword} />
          <Route path="/changeDetails" component={ChangeDetails} />
          <Redirect from='/*' to="/welcome" />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
