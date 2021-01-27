import React from 'react';
import { useHistory } from 'react-router-dom'
import logo from './../logo.png';
import './../App.css';
import Button from '@material-ui/core/Button';


const MainPage = () => {

  //Disable Right click
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }

  // Alert on Tab Changed within the Same browser Window
  function handleVisibilityChange() {
    if (document.hidden) {
      alert("You changed tab within the same browser window");
      // the page is hidden
    } else {
      // the page is visible
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange, false);


  const history = useHistory();

  function handleClick() {
    history.push("/login");
  }

  function handleClickDetect(){
    history.push("/detections")
  }

  return (
    <div>

      <header className="App-header">
        <img src={logo} alt="logo" />

        <p>
          Welcome to GodsEye
        </p>
        <small>
          Ai enabled Virtual Examination System
        </small>

        <br />
        <Button variant="contained" onClick={handleClick}>All the Best</Button>
        <br />
        <br />
        <Button variant="contained" onClick={handleClickDetect}>Detections</Button>
        <br />
      </header>
    </div>
  );
}

export default MainPage;