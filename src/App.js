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
        <Route path="/staysajek">
          <StayInSajek></StayInSajek>
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
