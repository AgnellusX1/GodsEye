import React from 'react';
import Webcam from "react-webcam";
import QuestionPage from './Questions';
import Detection from './Detections';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const minuteSeconds = 60;
const hourSeconds = 3600;

// const WebcamComponent = () => <Webcam />;
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
    } else {
      // the page is visible
    }
  }
  document.addEventListener("visibilitychange", handleVisibilityChange, false);


  // To make sure the user does not open any other App or lose Focus from the test Window
  window.onblur = function () {
    swal("You left the Secure Exam Window", "Action has been Recorded", "error");
  }

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
    // document.fullscreenElement will point to the element that
    // is in fullscreen mode if there is one. If there isn't one,
    // the value of the property is null.
    if (document.fullscreenElement) {
      console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
      history.push("/fullscreenalert")
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
// export default function App() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  // const days = Math.ceil(remainingTime / daySeconds);
  //const daysDuration = days * daySeconds;



 return (
    <div className="App-header" id="Dash">
        <header>
          <h3>
            <center>
              Dashboard
            </center>
          </h3>
         
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
      </header>
       
       
        <body>
            {/* Detection Section Starts here*/}
          <Detection>
        
           </Detection>
           {/*Detection Section ends here */}
  

        
        {/* Form Section Starts here */}
        
          <QuestionPage>

          </QuestionPage>
    
        {/* Form Section ends here */}
        
      <br />
        <center><Button variant="contained" onClick={onAccept}>Submit</Button></center>
        </body>
    </div>
  )
}
export default Dashboard;