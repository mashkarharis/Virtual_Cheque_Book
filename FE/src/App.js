import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Welcome from './pages/Welcome';
import SessionService from './Services/SessionService';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Contact_Details from './pages/Contact_Details';
import Account_Details from './pages/Account_Details';
import Staff_Dash from './pages/Staff_Dash';

function App(props) {
  SessionService.clearSession();
 //sSessionService.initSession({"A":123});
  

  return (
    <Router>
      <ChakraProvider>
        <Navbar heading='onlineCheque'/>
        <Switch>
          <Route path="/welcome" exact component={Welcome} />          
          <Route path="/Staff_Dashboard" component={Staff_Dash} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/home" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/Account_Details" component={Account_Details} />
          <Route path="/Contact_Details" component={Contact_Details} />
          <Redirect from='/*' to="/welcome" />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
