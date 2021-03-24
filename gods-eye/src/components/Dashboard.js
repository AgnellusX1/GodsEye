import React from 'react';
import Webcam from "react-webcam";
import QuestionPage from './Questions';
import Detection from './Detections';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

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

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);


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

  return (
    <div className="App-header" id="Dash">
      <center>
        <header>
          <h3>
            <center>
              Dashboard
            </center>
          </h3>
        </header>


        <body>

          {/* Cam Section Starts here */}
          <div id="camSection">
            <p>
              Cam Section
          </p>
            <Webcam className="Cam-live"
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            {imgSrc && (
              <img alt="Here you see"
                src={imgSrc}
              />
            )}

          </div>
          {/* Can Section ends Here */}

          {/* Detection Section Starts here*/}
          <Detection>

          </Detection>
          {/*Detection Section ends here */}

          {/* Form Section Starts here */}
          <div>
            <QuestionPage>

            </QuestionPage>
          </div>
          {/* Form Section ends here */}
          <Button variant="contained" onClick={onAccept}>Submit</Button>
        </body>
      </center>
    </div>
  )
}
export default Dashboard;