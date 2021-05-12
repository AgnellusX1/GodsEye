import config from "../config";
import React ,{useContext}from 'react';
import { useHistory } from 'react-router-dom'
import logo from './../logo.png';
import './../App.css';
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import Button from '@material-ui/core/Button';


const MainPage = () => {

  const history = useHistory();

  function handleClick() {
    var mywindow=window.open("/login","NewWindow","height=700,width=1720")
    // history.push("/login");
  }

  function handleClickDetect() {
    history.push("/detections")
  }

  function handleClickDetect2() {
    history.push("/detections2")
  }
  function handleClickAdmin() {
    history.push("/adminsignup")
  
  }

  function headpose(){
    history.push("/posenet")
  }

  return (
    <div>

      <header className="App-header">
        <img src={logo} alt="logo" />

        <p>
          Welcome to GodsEye
        </p>
        <small>
          AI Enabled Virtual Examination System
        </small>

        <Button id="homeButtons" variant="contained" onClick={handleClick}>All the Best</Button>
        <Button id="homeButtons" variant="contained" onClick={handleClickAdmin}>Admin</Button>
        <Button id="homeButtons" variant="contained" onClick={headpose}>Headpose</Button>
      </header>
    </div>
  );
}

export default MainPage;