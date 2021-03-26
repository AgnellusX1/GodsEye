// import React from 'react'
// import swal from 'sweetalert';
// const Detections2 = () => {

//   //Disable Right click
//   if (document.addEventListener) {
//     document.addEventListener('contextmenu', function (e) {
//       e.preventDefault();
//     }, false);
//   }

//   // Alert on Tab Changed within the Same browser Window
//   function handleVisibilityChange() {
//     if (document.hidden) {
//       swal("Tab Change Detected", "Action has been Recorded", "error");
//       // the page is hidden
//     } else {
//       // the page is visible
//     }
//   }

//   document.addEventListener("visibilitychange", handleVisibilityChange, false);

// // Put variables in global scope to make them available to the browser console.
// var video = document.querySelector('video');
// var constraints = window.constraints = {
//   audio: false,
//   video: true
// };
// var errorElement = document.querySelector('#errorMsg');

// navigator.mediaDevices.getUserMedia(constraints)
// .then(function(stream) {
//   var videoTracks = stream.getVideoTracks();
//   console.log('Got stream with constraints:', constraints);
//   console.log('Using video device: ' + videoTracks[0].label);
//   stream.onremovetrack = function() {
//     console.log('Stream ended');
//   };
//   window.stream = stream; // make variable available to browser console
//   video.srcObject = stream;
// })
// .catch(function(error) {
//   if (error.name === 'ConstraintNotSatisfiedError') {
//     errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
//         constraints.video.height.exact + ' px is not supported by your device.');
//   } else if (error.name === 'PermissionDeniedError') {
//     errorMsg('Permissions have not been granted to use your camera and ' +
//       'microphone, you need to allow the page access to your devices in ' +
//       'order for the demo to work.');
//   }
//   errorMsg('getUserMedia error: ' + error.name, error);
// });

// function errorMsg(msg, error) {
//   errorElement.innerHTML += '<p>' + msg + '</p>';
//   if (typeof error !== 'undefined') {
//     console.error(error);
//   }
// }
//   return (
//   <div>
//     <center>
//       <h3>
//         Page Not Found
//         </h3>
//       <small>
//         This acton has been recorded
//         </small>
//     </center>
//   </div>
//   )
// }

// export default Detections2;