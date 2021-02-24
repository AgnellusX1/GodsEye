import { Button } from '@material-ui/core';
import React from 'react'
import Webcam from "react-webcam";
//import Webcam from 'webcam-easy';
import { useHistory } from 'react-router-dom';
const ValidatePage = () => {

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

  function handleClick() {
    history.push("/systemcheck");
  }

//for capturing image
const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  //webcamRef.start()
  //.then(result =>{
    //console.log("webcam started");
  //})
  //.catch(err => {
    //console.log(err);
//});

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (<div>
    <center>
      <h3>
        Validate Page
    </h3>
      <p>
        When the user Successfully Signs in, the user will have to do a Validation by capturing his initial photo into the System
    </p>
<<<<<<< Updated upstream
      <Button variant="contained" onClick={handleClick}>
        Photo Captured Successfully
    </Button>
=======
    <p>The lighting in the room must be bright enough to be considered “daylight” quality. Overhead lighting is preferred. If overhead lighting is not available, the source of light must not be behind you.</p>
    <Webcam className="Cam-live"
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <center><button onClick={capture}>Capture photo</button>
            {imgSrc && (
              <img alt="Here"
                src={imgSrc}
              />
            )}</center>
            
            <center> <Button variant="contained" onClick={handleClick}>
            Photo Captured Successfully
            </Button></center>
    
>>>>>>> Stashed changes
    </center>
  </div>
  )
}

export default ValidatePage;