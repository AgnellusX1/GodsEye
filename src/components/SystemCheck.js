import { Button } from '@material-ui/core';
import React from 'react'
import {useHistory} from 'react-router-dom';
import browser from 'browser-detect';
import SpeedTester from 'browser-speed-test';
import "./SystemCheck.css"
import icon from "./icon.png"

const SystemCheck = () => {

function handleClick(){
  history.push("/validate");
}
    
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

//browser speed test
const tester = new SpeedTester({ });
tester.start();
console.log('Browserspeed:', tester)

//Browser detection
// const result = browser();
// const result= window.navigator.userAgent
// const result=window. navigator.appVersion
// console.log('Browserdetect:',result);

//Network speed
const net = `${navigator.connection.downlink}`
console.log('Networkspeed', net);
<div id="debugDiv"></div>

const history=useHistory();

//Camera Detection
var DetectRTC = require('detectrtc');
DetectRTC.load(function(){

    var webcam=DetectRTC.isWebsiteHasWebcamPermissions;
    if (webcam===false){
         
        var video = document.querySelector("#videoElement");
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
              .then(function (stream) {
                video.srcObject = stream;
              })
              
              .catch(function (err0r) {
                console.log("Something went wrong!");
              });
          }
    }

});

var aggi = false;
//browser
var browser=DetectRTC.browser.version
if(browser<= 86){
    console.log("Update Browser");
    aggi = true;
}
//Net Speed
if(net <= 0.3 ){
    console.log("Please Continue", net);
    aggi = true;
}
//Cam Detection
var webcam=DetectRTC.isWebsiteHasWebcamPermissions;
if (webcam===false){
  console.log("On your camera");
  aggi = true;
}

//Permission to Camera
function ActivateCam(){
  var now = Date.now();
navigator.mediaDevices.getUserMedia({video: true})
.then(function(stream) {
  console.log('Got stream, time diff :', Date.now() - now);
  handleClick();
})

}


  return (
    <body class="App-header">
  <div class="main">
    <p class="sign" align="center">System Compatibility Check</p>
        <table align="center">
            <tbody><tr>
                <td class="text-center">
                    <div>
                        <img src={icon} id="classIcon" />
                    </div>
                </td>
                <td>
                    <ul>
                        <li class="test">
                            <span ><b>OS:</b>  {"- " + JSON.stringify( DetectRTC.osName,null,2).slice(1,-1)+" " + JSON.stringify(DetectRTC.osVersion,null,0).slice(1,-1)} </span>
                        </li>
                        <li class="test">
                            <span><b>Browser:</b> {"- " + JSON.stringify(DetectRTC.browser.name === 'Edge' || 'Chrome' || 'Firefox',null,2).slice(1,-1)+" "+ JSON.stringify(DetectRTC.browser.version) } </span>
                        </li>
                        <li class="test">
                            <span><b>Internet Speed:</b> {"- " + JSON.stringify(net,null,2 ).slice(1,-1) + " Mbps" } </span>
                        </li>
                         <li class="test">
                         <span><b>Webcam:</b> {"- "+JSON.stringify(DetectRTC.isWebsiteHasWebcamPermissions)} </span>
                        </li>
                        
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>


    <center><Button disabled={aggi} variant='contained' onClick={openFullscreen}>Validate</Button></center>  
    <br></br>
   
    <center><Button variant='contained' onClick={ActivateCam}>Activate Your WebCam</Button></center>     
                
    </div>
     
</body>

  )
}


export default SystemCheck;