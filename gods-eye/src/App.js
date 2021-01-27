import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'

// Pages
// Here is where all the pages are connected to each other

import MainPage from './components/Home'
import LoginPage from './components/Login'
import Instructions from './components/Instructions'
import Dashboard from './components/Dashboard'
import QuestionsPage from './components/Questions'
import ThankyouPage from './components/Thankyou'
import PageNotFound from './components/404'
import ValidatePage from './components/Validate'
import SystemCheckPage from './components/SystemCheck'
import DetectionsPage from './components/Detections'


class App extends Component {
  render() {
    return(
    <Router>
      <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/validate" component={ValidatePage}/>
      <Route exact path="/systemcheck" component={SystemCheckPage}/>
      <Route exact path="/instructions" component={Instructions}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/detections" component={DetectionsPage}/>
      <Route exact path="/questionpg" component={QuestionsPage}/>
      <Route exact path="/thankyou" component={ThankyouPage}/>
      
      <Route exact path="/404" component={PageNotFound}/>
      <Redirect to="/404"/>
      </Switch>
    </Router>
    );
  }
}

export default App;