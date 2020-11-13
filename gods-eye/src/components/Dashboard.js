import React from 'react';
import Webcam from "react-webcam";
import ReactDOM from 'react-dom';
 
const WebcamComponent = () => <Webcam />;
const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
      <>
      <header>
          <h1>
              Capture your photo
          </h1>
      </header>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <br>
        </br>
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
      </>
    );
  };
  
  ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
/*const Dashboard = () => {
    return (<div>
        <center>
        <h3>
            Dashboard
        </h3>

        <div id="root"></div>
            <Button variant="contained" onClick={onSignIn} color="primary">Login</Button>
        </center>
    </div>
    )
}
ReactDOM.render(
    <Webcam />,
    document.getElementById('root')
  );*/

export default WebcamCapture;