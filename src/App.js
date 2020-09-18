import React, { createContext, useState }  from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Sajek from './Component/Sajek/Sajek';
import Sreemongol from './Component/Sreemongol/Sreemongol';
import Sundorbon from './Component/Sundorbon/Sundorbon';
import StayInSajek from './Component/StayInSajek/StayInSajek';
import StayInSreemongol from './Component/StayInSreemongol/StayInSreemongol';
import StayInSundorbon from './Component/StayInSundorbon/StayInSundorbon';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext=createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
           <Home></Home>
        </Route>
        <Route path="/sajek">
        <Sajek></Sajek>
        </Route>
        <Route path="/sreemongol">
          <Sreemongol></Sreemongol>
        </Route>
        <Route path="/sundorbon">
          <Sundorbon></Sundorbon>
        </Route>
        <PrivateRoute path="/sajekHotel">
          <StayInSajek></StayInSajek>
        </PrivateRoute>
        <Route path="/sreemongolHotel">
          <StayInSreemongol></StayInSreemongol>
        </Route>
        <Route path="/sundorbonHotel">
          <StayInSundorbon></StayInSundorbon>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
