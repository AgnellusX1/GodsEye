import React from 'react';
import Webcam from "react-webcam";
import QuestionPage from './Questions';
import Detection from './Detections';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
var count_fullscreen = 0;
var count_tabchange = 0;
const minuteSeconds = 60;
const hourSeconds = 3600;
var checkn ="";
var checke = "";


const Dashboard = () => {
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

  // window.onblur = function () {
  //   swal("Escaped Secure Window", "Action has been Recorded", "error");
  // }

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
  //For minutes, seconds
  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248;
  const remainingTime = endTime - stratTime;

  var countalt = 0;
  document.addEventListener('keydown', function(event){
		console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    if(event.key === 'Alt'){
      swal('Alt Keypress Detected');
      countalt = countalt+1;
      sessionStorage.setItem("countalt", countalt);
  }
  });

  return (

    <div className="App-header" id="Dash">
      <header>
        {/* <h3>
            <center>
              Dashboard
            </center>
          </h3> */}

        <div className="timer">
          <div class="row">

            <div class="column">
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#EF798A"]]}
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > minuteSeconds
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
                }
              </CountdownCircleTimer>
            </div>

            <div class="column">
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#218380"]]}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > 0
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime("seconds", getTimeSeconds(elapsedTime))
                }
              </CountdownCircleTimer>
            </div>
          </div>
        </div>

        <div className="detect">
          {/* Detection Section Starts here*/}
          <Detection>

          </Detection>
          {/*Detection Section ends here */}
        </div>

        <div className="text">
          <p>Remaining Time!!</p>
        </div>

        <div className="quest">
          {/* Form Section Starts here */}
          <QuestionPage>

          </QuestionPage>
          {/* Form Section ends here */}
        </div>

        <div className="button">
          <p>Submit here!!</p>
          <center><Button variant="contained" onClick={onAccept}>Submit</Button></center>
        </div>
      </header>

    </div>
  )
}
export default Dashboard;