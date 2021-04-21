import React from "react";
import swal from 'sweetalert';
import * as cocoSsd from "@tensorflow-models/coco-ssd";

import { Button } from '@material-ui/core';
import "@tensorflow/tfjs";
import "./Dashboard2.css";
var count_facedetect = 0;
var form_link = sessionStorage.getItem("form_link")

export default class Dashboard2 extends React.Component {
  videoRef = React.createRef();
  canvasRef = React.createRef();

  componentDidMount() {

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: "user",
            width: 500,
            height: 300
          }
        })
        .then(stream => {
          window.stream = stream;
          this.videoRef.current.srcObject = stream;
          return new Promise((resolve, reject) => {
            this.videoRef.current.onloadedmetadata = () => {
              resolve();
            };
          });
        });
      const modelPromise = cocoSsd.load();
      Promise.all([modelPromise, webCamPromise])
        .then(values => {
          this.detectFrame(this.videoRef.current, values[0]);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  detectFrame = (video, model) => {
    model.detect(video).then(predictions => {
      if (this.canvasRef.current) {

        this.renderPredictions(predictions);
        requestAnimationFrame(() => {
          this.detectFrame(video, model);
        });
      } else {
        return false;
      }
    });
  };

  renderPredictions = predictions => {
    //var count=100;
    const ctx = this.canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Font options.
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";

    predictions.forEach(prediction => {

      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 8, textHeight + 8);
      var multiple_face = 0
      for (let i = 0; i < predictions.length; i++) {
        if (prediction.class == "person") {
          multiple_face = multiple_face + 1
          if (multiple_face >= 2) {
            swal("Multiple Face Detection", "Action has been Recorded", "error");
          }
        }

        if (predictions[i].class === "cell phone") {
          swal("Cell Phone Detected", "Action has been Recorded", "error");
          count_facedetect = count_facedetect + 1;
        }
        else if (predictions[i].class === "book") {
          swal("Object Detected", "Action has been Recorded", "error");
          count_facedetect = count_facedetect + 1;
        }
        else if (predictions[i].class === "laptop") {
          swal("Object Detected", "Action has been Recorded", "error");
          count_facedetect = count_facedetect + 1;
        }
        else if (predictions[i].class !== "person") {
          swal("Face Not Visible", "Action has been Recorded", "error");
          count_facedetect = count_facedetect + 1;
        }
      }
      console.log(count_facedetect);
    });

    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      console.log(predictions)
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000";
      console.log(prediction.class);

      if (prediction.class == "person" || prediction.class == "cell phone" || prediction.class == "book" || prediction.class == "laptop") {
        ctx.fillText(prediction.class, x, y);
      }
    });
    console.log("final")
    console.log(count_facedetect)
    sessionStorage.setItem("count_facedetect", count_facedetect);

  };

  render() {
    return (
      <div className="App-header" id="Dash">
        <header>

          <video
          id="mlVideo"
            className="size"
            autoPlay
            playsInline
            muted
            ref={this.videoRef}
            width="500"
            height="300"
          />
          <canvas
          id="mlCanvas"
            className="size"
            ref={this.canvasRef}
            width="500"
            height="300"
          />

          <div className="timer">
            <div class="row">

              {/* <div class="column">
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#EF798A"]]}
                duration={hourseconds}
                initialRemainingTime={remainingTime % hourseconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > minuteSeconds
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime("minutes", getTimeMinutes(hourseconds - elapsedTime))
                }
              </CountdownCircleTimer>
            </div> */}

              {/* <div class="column">
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#218380"]]}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > 0
                ]}
              >
                {/* {({ elapsedTime }) =>
                  renderTime("seconds", getTimeSeconds(elapsedTime))
                } */}
              {/* </CountdownCircleTimer>
            </div> */}

            </div>
          </div>


          <div className="text">
            <p>Remaining Time!!</p>
          </div>

          <div className="button">
            <p>Submit here!!</p>
            <center><Button variant="contained" onClick={console.log("yes")}>Submit</Button></center>
          </div>

          <iframe src={form_link} id='form'>Loading…</iframe >

        </header>

      </div>

      // <div>
      // {/* <video
      //   className="size"
      //   autoPlay
      //   playsInline
      //   muted
      //   ref={this.videoRef}
      //   width="500"
      //   height="300"
      // />
      // <canvas
      //   className="size"
      //   ref={this.canvasRef}
      //   width="500"
      //   height="300"
      // /> */}

      // {/* <iframe className="qsection" src={form_link} id='form' width="850" height="100vh" frameBorder="0" marginheight="0" marginwidth="0">Loading…</iframe > */}

      // {/* </div> */}
    );
  }
}