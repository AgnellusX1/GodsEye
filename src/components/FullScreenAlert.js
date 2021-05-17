import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import warning from "./warning.jpg"
import { useState, useEffect } from 'react';
//var count_browser = 0;

const FullScreenAlert = (props) => {

  //Disable Right click
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }

  // // Alert on Tab Changed within the Same browser Window
  // function handleVisibilityChange() {
  //   if (document.hidden) {
  //     swal("Tab Change Detected", "You clicked the button!", "error");
  //     count_browser=count_browser+1;
  //     // the page is hidden
  //   } else {
  //     // the page is visible
  //   }
  // }

  // document.addEventListener("visibilitychange", handleVisibilityChange, false);

  //sessionStorage.setItem("count_browser", count_browser);

  var elem = document.documentElement;
  const history = useHistory();
  function back2exam() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      history.push("/dashboard")
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
      history.push("/dashboard")
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
      history.push("/dashboard")
    }
  }

  //timer 
  var get_time = sessionStorage.getItem("exam_timer");
  var get_sec = sessionStorage.getItem("exam_sec");

  if(get_sec === null){
    get_sec = 0;
  }
 const { initialMinute = get_time, initialSeconds = get_sec } = props;
  const myInterval = React.useRef();
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        var currectSec = seconds;
         sessionStorage.setItem("exam_sec", currectSec);
      }
      else {
         var currectTime = minutes-1;
          sessionStorage.setItem("exam_timer", currectTime);
          setMinutes(minutes - 1);
          setSeconds(59);
         
        }

  },1000);
 
      return () => {
      clearInterval(myInterval);
    };
  });

  return (<div className="App-header">
    <center>
    <div>
      <img src={warning} id="warningIcon" />
      </div>
      <br/>
      <h3>
        SINCE YOU ESCAPED FULLSCREEN, YOUR ANSWERS ARE LOST!!
        </h3>
        <br/>
        <small>
            Action has been Recorded!
        </small>
        <br/>
        <br/>
        <p>
        <i>Another Atempt to do so will get you Debared from the Test</i>
        </p>
       
      <Button variant='contained' onClick={back2exam}>I Understand, get me back to Exam</Button>
    </center>
  </div>
  )
}

export default FullScreenAlert;