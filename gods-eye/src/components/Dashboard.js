import React from 'react';
import Webcam from "react-webcam";
import QuestionPage from './Questions';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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
      alert("You changed tab within the same browser window");
      // the page is hidden
    } else {
      // the page is visible
    }
  }
  document.addEventListener("visibilitychange", handleVisibilityChange, false);



  const history = useHistory();
  function onAccept() {
    history.push('/thankyou')
  }

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);


  if (document.fullscreenElement){
    console.log("In Full");
  }else{
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
            <button onClick={capture}>Capture photo</button>
            {imgSrc && (
              <img alt="Here you see"
                src={imgSrc}
              />
            )}

          </div>
          {/* Can Section ends Here */}


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