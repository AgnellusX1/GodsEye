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



//for capturing image
  const webcamRef = React.useRef(null)
  const [camOpen, setCamOpen] = React.useState(false)
  const [imgSrc, setImgSrc] = React.useState(null)


  const capture = React.useCallback(() => {
    if (webcamRef){
      const imageSrc = webcamRef.current.getScreenshot()
      setImgSrc(imageSrc)
    }}, [webcamRef, setImgSrc, webcamRef])
const history=useHistory();

function handleClick(){
  history.push("/systemcheck");
}
 

  return (<div>
    <center>
      <h3>
        Validate Page
    </h3>
    <p>
        When the user Successfully Signs in, the user will have to do a Validation by capturing his initial photo into the System
    </p>
    <p>The lighting in the room must be bright enough to be considered “daylight” quality. Overhead lighting is preferred. If overhead lighting is not available, the source of light must not be behind you.</p>
    <Webcam className="Cam-live"
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            {imgSrc && (
              <img alt="Here"
                src={imgSrc}
              />
            )}
            <center><button onClick={capture}>Capture photo</button></center>
            
            <center> <Button variant="contained" onClick={handleClick}>Photo Captured Successfully</Button></center>
    
    </center>
  </div>
  )
}

export default ValidatePage;