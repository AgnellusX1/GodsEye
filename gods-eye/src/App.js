import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'

// Pages
// Here is where all the pages are connected to each other

import MainPage from './components/Home'
import PageNotFound from './components/404'
import LoginPage from './components/Login'
import Dashboard from './components/Dashboard'
import questionpg from './components/questionpg'
import FullPg from './components/Full'

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/full" component={FullPg}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/questionpg" component={questionpg}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/404" component={PageNotFound}/>
      <Redirect to="/404"/>
      </Switch>
    </Router>
    );
  }
}

export default App;


// return <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>