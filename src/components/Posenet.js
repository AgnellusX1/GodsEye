import React,{useRef} from 'react'
import swal from 'sweetalert';
import * as posenet from '@tensorflow-models/posenet';
import Webcam from 'react-webcam';


const Posenet = () => {
  const webcamRef=useRef(null);
  const canvasRef=useRef(null);

//  Load posenet
const runPosenet = async () => {
  const net = await posenet.load({
    architecture: 'ResNet50',
    quantBytes: 2,
    inputResolution: { width: 640, height: 480 },
    scale: 0.6,
  });
  //
  setInterval(() => {
    detect(net);
  }, 500);
};

const detect = async (net) => {
  if (
    typeof webcamRef.current !== "undefined" &&
    webcamRef.current !== null &&
    webcamRef.current.video.readyState === 4
  ) {
    // Get Video Properties
    const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set video width
    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;

    // Make Detections
    const pose = await net.estimateSinglePose(video);
    // console.log(pose);

    EarsDetect(pose["keypoints"], 0.8);

    // drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
  }
};

// const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
//   const ctx = canvas.current.getContext("2d");
//   canvas.current.width = videoWidth;
//   canvas.current.height = videoHeight;

//   drawKeypoints(pose["keypoints"], 0.6, ctx);
//   drawSkeleton(pose["keypoints"], 0.7, ctx);
// };

const EarsDetect=(keypoints, minConfidence) =>{
  //console.log("Checked")
  const keypointEarR = keypoints[3];
  const keypointEarL = keypoints[4];

  if(keypointEarL.score<minConfidence){
    swal("You looked away from the Screen (To the Right)")
  }
  if (keypointEarR.score<minConfidence){
    swal("You looked away from the Screen (To the Left)")
  }
}

runPosenet();
  return (<div>
    <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
  </div>
  )
}

export default Posenet;