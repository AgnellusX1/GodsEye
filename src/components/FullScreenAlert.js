import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert';
var count_browser = 0;

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

  sessionStorage.setItem("count_browser", count_browser);

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
      <h3>
        You tried to Exit Full Screen
        </h3>
      <small>
        This action has been recorded
        </small>
      <p>
        Another Atempt to do so will get you debared from the test
        </p>
      <Button variant='contained' onClick={back2exam}>I Understand, get me back to Exam</Button>
    </center>
  </div>
  )
}

export default FullScreenAlert;