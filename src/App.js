import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  

// Pages
// Here is where all the pages are connected to each other

import MainPage from './components/Home'
import LoginPage from './components/Login'
import Instructions from './components/Instructions'
import Dashboard from './components/Dashboard'
import QuestionsPage from './components/Questions'
import ThankyouPage from './components/Thankyou'
import PageNotFound from './components/404'
import SystemCheckPage from './components/SystemCheck'
import ValidatePage from './components/Validate'
import DetectionsPage from './components/Detections'
import DetectionPage2 from './components/Detections2'
import FullScreenAlertPage from './components/FullScreenAlert'
import { ProtectedRoute } from './components/Protected.Route';
import Admin from './components/Admin'
import Formvalid from './components/formvalid'
import Results from './components/Results'
import Dashboard2 from './components/Dashboard2'
import AdminSignUp from './components/AdminSignUp'



var count=100;

class App extends Component {
  render() {
    return (
      
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/systemcheck" component={SystemCheckPage} />
          <Route exact path="/validate" component={ValidatePage} />   
          <Route exact path="/instructions" component={Instructions} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/detections" component={DetectionsPage} />
          <Route exact path="/detections2" component={DetectionPage2} />
          <Route exact path="/questionpg" component={QuestionsPage} />
          <Route exact path="/thankyou" component={ThankyouPage} />
          <Route exact path="/fullscreenalert" component={FullScreenAlertPage} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/formvalid" component={Formvalid} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/dashboard2" component={Dashboard2} />
          <Route exact path="/adminsignup" component={AdminSignUp} />
        


          <Route exact path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;