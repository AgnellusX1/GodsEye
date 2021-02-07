import React from 'react';
import { useHistory } from 'react-router-dom'
import logo from './../logo.png';
import './../App.css';
import Button from '@material-ui/core/Button';


const MainPage = () => {

  const history = useHistory();

  function handleClick() {
    history.push("/login");
  }

  function handleClickDetect() {
    history.push("/detections")
  }

  function handleClickDetect2() {
    history.push("/detections2")
  }
  function handleClickAdmin() {
    history.push("/admin")
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
        <br />
        <Button variant="contained" onClick={handleClickDetect2}>Detections2</Button>
        <br />
        <br />
        <Button variant="contained" onClick={handleClickAdmin}>Admin</Button>
      </header>
    </div>
  );
}

export default MainPage;