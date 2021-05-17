import React from 'react';
import { useState, useEffect } from 'react';
import Detection from './Detections';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import DetectRTC from 'detectrtc';
import swal from 'sweetalert';
import exam_timer from './formvalid';
import formvalid from './formvalid';
import firebase from "firebase/app";
import "./Dashboard2.css";
//import checkname from "./Login";


// var checkn = "";
// var checke = "";


const Dashboard = (props) => {

  var form_link = sessionStorage.getItem("form_link");

  //Disable Right click
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }

  // Alert on Tab Changed within the Same browser Window
  function handleVisibilityChange() {
    if (document.hidden) {
      var count_tabchange = 0;
      swal("Changed Tab Detected", "Action has been Recorded", "error");
      // the page is hidden
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


  // Count number of times escaped Fullscreen

  if (document.fullscreenElement) {
    //console.log("In Full");
  } else {
    history.push('fullscreenalert')
  }

  document.addEventListener('fullscreenchange', (event) => {
    var count_fullscreen = 0;
    if (document.fullscreenElement) {
     // console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
      history.push("/fullscreenalert")
      //var count_fullscreen = sessionStorage.getItem("count_fullscreen")
      count_fullscreen = count_fullscreen + 1;
      //console.log(count_fullscreen)
      sessionStorage.setItem("count_fullscreen", count_fullscreen);
    }
  });

  
  // document.addEventListener('keydown', function (event) {
  //   //console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
  //   if (event.altkey === 'Alt') {
  //     swal('Alt Keypress Detected');
  //     return false;
  //     countalt = countalt + 1;
  //     sessionStorage.setItem("countalt", countalt);
  //   }
  // });
  // Count number of times Alt key pressed
  var countalt = 0;
  document.onkeydown = function (event) {
    //console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    if (event.altKey) {
      swal('Keypress Detected');
      countalt = countalt + 1;
      sessionStorage.setItem("countalt", countalt);
      return false;
    }
    else {
      return true;
    }
  }
  
  var countctrl = 0;
  document.onkeydown = function (event) {
    //console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    //if (event.ctrlKey && event.key === "t") {
      if (event.ctrlKey){
      swal('Keypress Detected');
      countctrl = countctrl + 1;
      sessionStorage.setItem("countctrl", countctrl);
      return false;
    } else {
      return true;
    }
  }

  //Timer Code------> Begins from here 
  // const timerProps = {
  //   isPlaying: true,
  //   size: 120,
  //   strokeWidth: 6
  // };
  // Fetches the timer provided by Admin in Admin page to Dashboard
  var get_time = sessionStorage.getItem("exam_timer", exam_timer);
  const { initialMinute = get_time, initialSeconds = 0 } = props;

  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
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
          var currectTime = minutes -1
          sessionStorage.setItem("exam_timer", currectTime);
        }
      }
    }, 1000)

    return () => {
      clearInterval(myInterval);
    };
  });

  // Give ALert when 1 minute left 
  if (minutes === 1 && seconds === 1) {
    swal("Only 1 Minute Left, Please Submit or else Answers WONT BE SAVED ");
  }
  // Timer Code------------> Ends here



  //Displays Score in Thankyou page
  function handleClicksub() {
    var PIDs = sessionStorage.getItem("checkname").slice(-6)
    //console.log(PIDs)
    var count_facedetect = sessionStorage.getItem("count_facedetect")
    var count_fullscreen = sessionStorage.getItem("count_fullscreen")
    var count_tabchange = sessionStorage.getItem("count_tabchange")
    var countalt = sessionStorage.getItem("countalt")
    var countctrl = sessionStorage.getItem("countctrl")
    var checkn = sessionStorage.getItem("checkname")
    var checke = sessionStorage.getItem("checkemail")
    var photo = sessionStorage.getItem("imageSrc")
    //Fetching data from FireBase
    const con_db = firebase.database().ref("stud_records");
    con_db.on('value', (snapshot) => {


      var s = snapshot.val()
      var codeexam = sessionStorage.getItem("formvalid", formvalid);
      //var codeexam =  s[d]
      //console.log(s)
      con_db.child(codeexam).child(PIDs).set({
        alt: countalt,
        tab: count_tabchange,
        face: count_facedetect,
        fullscreen: count_fullscreen,
        semail: checke,
        sname: checkn,
        photo: photo

      })
    });

    history.push('/thankyou')
  };

  
// Camera Permission
  DetectRTC.load(function () {

    const webcam = DetectRTC.isWebsiteHasWebcamPermissions;
    if (!webcam) {
      navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      var video = document.querySelector("#videoElement");
      if (navigator.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function (stream) {
            video.srcObject = stream;
          })

          .catch(function (err0r) {
            //console.log("Something went wrong!");
          });
      }
    }

  });


// enable/disable iframe according to camera permissions
  const webcam = DetectRTC.isWebsiteHasWebcamPermissions;
 

    if (webcam === true) {
    var isAllowed = sessionStorage.getItem("form_link");;  
  } 
    else {
    var isAllowed = '/components/404.js';
    swal("Enable Your Camera");
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

        <div className="lame">
          <h3 align="left">Name :  <span style={{ fontSize: '20px' }} > {JSON.stringify(sessionStorage.getItem("checkname")).slice(1, -8)}</span></h3>
          <h3 align="left">PID :  <span style={{ fontSize: '20px' }} > {JSON.stringify(sessionStorage.getItem("checkname")).slice(-7).slice(0, -1)}</span></h3>
        </div>

        <div className="leftClass">
          <p>Timer: {minutes === 0 && seconds === 1 ? history.push('/thankyou') : <h1 align="center" style={{ fontSize: '69px' }}>  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
          } </p>
        </div>

        <div className="button">
          <p align="center" style={{ fontSize: '18px' }}>To Save Your Attendance :<br/> Kindly Click <strong>Exit Exam Window</strong> After Submission Of Google Form </p>
          <center>
            <Button
              style={{ fontSize: '15px' }}
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleClicksub}>
              Exit Exam Window
              </Button>
          </center>
          <br/>
          <p align="left" style={{ fontSize: '18px' }}><i>DONOT ESCAPE THIS PAGE ELSE ANSWERS WILL BE UNSAVED!!</i></p>
        </div>

        <iframe src={isAllowed} id='form'>Loading…</iframe >

      </header>

    </div>
  )
}

export default Dashboard;
