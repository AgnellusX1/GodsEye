import { Button } from '@material-ui/core';
import React from 'react'
import Webcam from "react-webcam";
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import './validate.css';
import { Container, Row, Col } from 'react-bootstrap'

const ValidatePage = () => {
  var buttonfield = true;
  //Disable Right click
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }
  // document.addEventListener("visibilitychange", handleVisibilityChange, false);
  //for capturing image
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    sessionStorage.setItem("imageSrc", imageSrc);
  }, [webcamRef, setImgSrc]);
  //getScreenshot({width: 400, height: 500});

  //image as base64
  console.log(imgSrc);

  if (imgSrc) {
    buttonfield = false;
  }


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
  return (<div className="App-header">
    <br></br>
    <p align="center"><b>Instructions to Follow:</b></p>
    <li align="center"><strong>The lighting in the room must be bright enough to be considered “daylight” quality. Overhead lighting is preferred. </strong></li>

    <li align="left"><strong>If overhead lighting is not available, the source of light must not be behind you.</strong></li>
    <br></br>
    <Container fluid>
      <Row>
        <Col>

          <Webcam
            audio={false}
            height={500}
            width={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
        </Col>
        <Col>
          {imgSrc && (
            <img
              // height={300}
              // width={400}
              src={imgSrc}
            />
          )}
        </Col>
      </Row>
    </Container>

    {/* <div class= "row">
        <div class="column"
        className="webcamSide">
        <Webcam
        audio={false}
        height={500}
        width={400}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
        </div>
      
      <div class = "column"
      className="captureSide">
      {imgSrc && (
        <img
        // height={300}
        // width={400}
        src={imgSrc}
        />
        )}

      </div>
     
      </div> */}
    <center><Button variant="contained" onClick={capture}>Capture Photo</Button></center>
    <br />
    <center><Button disabled={buttonfield} variant="contained" onClick={handleClick}>Confirm Validation</Button></center>
  </div>
  )
}

export default ValidatePage;