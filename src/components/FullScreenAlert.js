import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert';
import warning from "./warning.jpg"
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