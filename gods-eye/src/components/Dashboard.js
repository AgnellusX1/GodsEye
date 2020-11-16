import React from 'react';
import Webcam from "react-webcam";
import ReactDOM from 'react-dom';
import QuestionPage from './Questionpg';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// const WebcamComponent = () => <Webcam />;
const Dashboard = () => {

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


  return (
    <div className="App-header">
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
              <img
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

  // ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
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

// export default WebcamCapture;