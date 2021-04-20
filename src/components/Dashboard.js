import React from 'react';
import { useState, useEffect } from 'react';
import Webcam from "react-webcam";
import QuestionPage from './Questions';
import Detection from './Detections';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import exam_timer from './formvalid';
import firebase from "firebase/app";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
var count_fullscreen = 0;
var count_tabchange = 0;
const minuteSeconds = 60;
const timeslot = exam_timer;
const hourseconds = 3600;
var checkn = "";
var checke = "";


const Dashboard = (props:any) => {

var timeslot = sessionStorage.getItem("exam_timer")

  //Disable Right click
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }
  // Alert on Tab Changed within the Same browser Window
  function handleVisibilityChange() {
    if (document.hidden) {
      swal("Changed Tab Detected", "Action has been Recorded", "error");
      // the page is hidden
      //var count_tabchange = sessionStorage.getItem("count_tabchange")
      count_tabchange = count_tabchange + 1
      sessionStorage.setItem("count_tabchange", count_tabchange);

    } else {
      // the page is visible
    }
  }
  document.addEventListener("visibilitychange", handleVisibilityChange, false);

  //To make sure the user does not open any other App or lose Focus from the test Window
  var i = 0;

  const history = useHistory();
  function onAccept() {
    history.push('/thankyou')
  }

  if (document.fullscreenElement) {
    console.log("In Full");
  } else {
    history.push('fullscreenalert')
  }

  document.addEventListener('fullscreenchange', (event) => {
    if (document.fullscreenElement) {
      console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
      history.push("/fullscreenalert")
      //var count_fullscreen = sessionStorage.getItem("count_fullscreen")
      count_fullscreen = count_fullscreen + 1;
      console.log("count_fullscreen")
      console.log(count_fullscreen)
      sessionStorage.setItem("count_fullscreen", count_fullscreen);
    }
  });

  //For timer
  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
  };
  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

    const {initialMinute = 1,initialSeconds = 5} = props;
    
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
         
        return ()=> {
            clearInterval(myInterval);
          };
    });


  var countalt = 0;
  document.addEventListener('keydown', function (event) {
    console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    if (event.key === 'Alt') {
      swal('Alt Keypress Detected');
      countalt = countalt + 1;
      sessionStorage.setItem("countalt", countalt);
    }
  });

  function handleClicksub() {
    var PIDs = sessionStorage.getItem("checkname").slice(-6)
    console.log(PIDs)
    var count_facedetect = sessionStorage.getItem("count_facedetect")
    var count_fullscreen = sessionStorage.getItem("count_fullscreen")
    var count_tabchange = sessionStorage.getItem("count_tabchange")
    var countalt = sessionStorage.getItem("countalt")
    var checkn = sessionStorage.getItem("checkname")
    var checke = sessionStorage.getItem("checkemail")
    

    const con_db = firebase.database().ref("stud_records");
    con_db.on('value', (snapshot) => {

      var s = snapshot.val()
      console.log(s)
      con_db.child(PIDs).set({
        alt: countalt,
        face: count_facedetect,
        fullscreen: count_fullscreen,
        semail: checke,
        sname: checkn
      });
    });

    history.push('/thankyou')
  };


 if (minutes === 1 && seconds === 1){
        swal("Only 1 Minute Left, Please Submit or else Answers WONT BE SAVED ");
      }

      if (minutes === 0 && seconds === 1){
        history.push('/thankyou')
      }

  return (
   
 
    <div className="App-header" id="Dash">
      <header>
      
        <div className="detect">
          {/* Detection Section Starts here*/}
          <Detection>

          </Detection>
          {/*Detection Section ends here */}
        </div>

        
        <div className="quest">
          {/* Form Section Starts here */}
          <QuestionPage>

          </QuestionPage>
          {/* Form Section ends here */}
        </div>

      <div className="leftClass">
        <p align ="left">Timer</p>   
        
          { minutes === 0 && seconds === 0 ? null : <h1 align = "left">  {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
          }
                
      </div>

        <div className="button">
          <p>Submit here!!</p>
          <center><Button variant="contained" onClick={handleClicksub}>Submit</Button></center>
        </div>
      </header>

    </div>
  )
}

export default Dashboard;
