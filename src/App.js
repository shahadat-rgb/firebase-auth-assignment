import React from 'react';
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

function App() {
  return (
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
        <Route path="/sajekHotel">
          <StayInSajek></StayInSajek>
        </Route>
        <Route path="/sreemongolHotel">
          <StayInSreemongol></StayInSreemongol>
        </Route>
        <Route paath="/sundorbonHotel">
          <StayInSundorbon></StayInSundorbon>
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
