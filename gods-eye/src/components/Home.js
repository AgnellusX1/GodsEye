import React from 'react';
import { useHistory } from 'react-router-dom'
import logo from './../logo.svg';
import './../App.css';
import Button from '@material-ui/core/Button';

import LoginPage from './Login'

import { FullScreen, useFullScreenHandle } from "react-full-screen";


const MainPage = () => {
  //Disable Right click
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("This action is not allowed..and has been recorded")
  });

  // function blurrie(){
  //   alert("Dumb")
  // }

  // document.onblur=blurrie()

  // window.addEventListener('beforeunload',function(e){
  //   e.preventDefault();
  //   alert("LOL u dead")
  //   e.returnValue="";
  // })


  const history = useHistory();

  function handleClick() {
    history.push("/login");
  }

  function handleClickFull() {
    history.push("/full");
  }

  const handle = useFullScreenHandle();

  function uleft() {
    alert("hi")
  }

  return (
    <div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to GodsEye
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
              </a>

        <Button variant="contained" onClick={handleClick}>Go to Login</Button>

        <button onClick={handle.enter}>
          fullscreen
              </button>

        <Button variant="contained" onClick={handleClickFull}>Go to Full</Button>

        <FullScreen handle={handle}>

          <div className="full-screenable-node" style={{ background: "green" }}>
            Second
          <button onClick={handle}>
              Switch
          </button>
          </div>

        </FullScreen>
      </header>
    </div>
  );
}

export default MainPage;