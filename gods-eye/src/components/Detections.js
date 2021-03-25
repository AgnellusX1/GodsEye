import React from "react";
import ReactDOM from "react-dom";
import swal from 'sweetalert';

import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import "./Detections.css";

class Detection extends React.Component {
  videoRef = React.createRef();
  canvasRef = React.createRef();

  componentDidMount() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: "user",
            width: 600,
            height: 500
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
      this.renderPredictions(predictions);
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  };

  renderPredictions = predictions => {
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
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
      for (let i = 0; i < predictions.length; i++) {
        if (predictions[i].class === "cell phone") {
          swal("Cell Phone Detected", "Action has been Recorded", "error");
        }
        else if (predictions[i].class === "book") {
          swal("Notebook Detected", "Action has been Recorded", "error");
        }
        else if (predictions[i].class === "laptop") {
          swal("Laptop Detected", "Action has been Recorded", "error");
        }
        else if (predictions[i].class !== "person") {
          swal("Face Not Visible", "Action has been Recorded", "error");
        }
      }
    });

    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000";
      ctx.fillText(prediction.class, x, y);
    });
  };

  render() {
    return (
      <div>
        <video
          className="size"
          autoPlay
          playsInline
          muted
          ref={this.videoRef}
          width="400"
          height="300"
        />
        <canvas
          className="size"
          ref={this.canvasRef}
          width="400"
          height="300"
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Detection />, rootElement);

export default Detection;
