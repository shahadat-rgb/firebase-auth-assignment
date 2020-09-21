import React, { createContext, useState }  from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import SajekVelly from './Component/Sajek/SajekVelly';
import Sreemangol from './Component/Sreemongol/Sreemangol';
import Sundarban from './Component/Sundorbon/Sundarban';
import StayInSajek from './Component/StayInSajek/StayInSajek';
import StayInSreemongol from './Component/StayInSreemongol/StayInSreemongol';
import StayInSundorbon from './Component/StayInSundorbon/StayInSundorbon';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import NoMatch from './Component/NoMatch/NoMatch';

export const UserContext=createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>

    <Router>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
           <Home></Home>
        </Route>
        <Route path="/sajek">
         <SajekVelly></SajekVelly>
        </Route>
        <Route path="/sreemongol">
          <Sreemangol></Sreemangol>
        </Route>
        <Route path="/sundorbon">
          <Sundarban></Sundarban>
        </Route>
        <PrivateRoute path ="/sajekHotel">
          <StayInSajek></StayInSajek>
        </PrivateRoute>
        <PrivateRoute path ="/sreemongolHotel">
          <StayInSreemongol></StayInSreemongol>
        </PrivateRoute>
        <PrivateRoute path ="/sundorbonHotel">
          <StayInSundorbon></StayInSundorbon>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
      
        <Route path="*" >
             <NoMatch></NoMatch>
        </Route>
      
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
