import { Button } from '@material-ui/core';
import React from 'react'
import Webcam from "react-webcam";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
const ValidatePage = () => {

  //Disable Right click
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }

  // // Alert on Tab Changed within the Same browser Window
  // function handleVisibilityChange() {
  //   if (document.hidden) {
  //     swal("Tab Change Detected", "Action has been Recorded", "error");
  //     // the page is hidden
  //   } else {
  //     // the page is visible
  //   }
  // }
  // document.addEventListener("visibilitychange", handleVisibilityChange, false);
  //for capturing image
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);


  const history = useHistory();


  var elem = document.documentElement;

  /* View in fullscreen */
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      history.push("/instructions")
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
      history.push("/instructions")
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
      history.push("/instructions")
    }
  }
  function handleClick() {
    history.push("/systemcheck");
  }


  return (<div>
    <center>
      <h3>
        Validate Page
    </h3>
    </center>
    <br></br>
      <p align ="center"><b>Instructions to Follow:</b></p>
      
      <br></br>
      
      <li align = "center"><strong>The lighting in the room must be bright enough to be considered “daylight” quality. Overhead lighting is preferred. </strong></li>
      <br></br>
      <li align ="center"><strong>If overhead lighting is not available, the source of light must not be behind you.</strong></li>
      <center>
      <br></br>
      <br></br>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      {/* <center><button onClick={capture}>Capture photo</button></center> */}
      {imgSrc && (
        <img
          src={imgSrc}
        />
      )}
       <br></br>
       <br></br>
     
      <center><Button variant="contained" onClick={handleClick}>Confirm Validation</Button></center>


    </center>
  </div>
  )
}

export default ValidatePage;