import { Button } from '@material-ui/core';
import React from 'react'
import {useHistory} from 'react-router-dom';
//import NetworkSpeed from 'network-speed';
//const {NetworkSpeed} = require('network-speed').Url;  // ES5
//const testNetworkSpeed = new NetworkSpeed();
import browser from 'browser-detect';
import SpeedTester from 'browser-speed-test';
 
const SystemCheck = () => {

    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        // Firefox 38+ seems having support of enumerateDevicesx
        navigator.enumerateDevices = function (callback) {
            navigator.mediaDevices.enumerateDevices().then(callback);
        };
    }

    var MediaDevices = [];
    var isHTTPs = Location.protocol === 'https:';
    var canEnumerate = false;

    if (typeof MediaStreamTrack !== 'undefined' && 'getSources' in MediaStreamTrack) {
        canEnumerate = true;
    } else if (navigator.mediaDevices && !!navigator.mediaDevices.enumerateDevices) {
        canEnumerate = true;
    }

    var hasMicrophone = false;
    var hasSpeakers = false;
    var hasWebcam = false;

    var isMicrophoneAlreadyCaptured = false;
    var isWebcamAlreadyCaptured = false;

    function checkDeviceSupport(callback) {
        if (!canEnumerate) {
            return;
        }

        if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
            navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);
        }

        if (!navigator.enumerateDevices && navigator.enumerateDevices) {
            navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator);
        }

        if (!navigator.enumerateDevices) {
            if (callback) {
                callback();
            }
            return;
        }

        MediaDevices = [];
        navigator.enumerateDevices(function (devices) {
            devices.forEach(function (_device) {
                var device = {};
                for (var d in _device) {
                    device[d] = _device[d];
                }

                if (device.kind === 'audio') {
                    device.kind = 'audioinput';
                }

                if (device.kind === 'video') {
                    device.kind = 'videoinput';
                }

                var skip;
                MediaDevices.forEach(function (d) {
                    if (d.id === device.id && d.kind === device.kind) {
                        skip = true;
                    }
                });

                if (skip) {
                    return;
                }

                if (!device.deviceId) {
                    device.deviceId = device.id;
                }

                if (!device.id) {
                    device.id = device.deviceId;
                }

                if (!device.label) {
                    device.label = 'Please invoke getUserMedia once.';
                    if (!isHTTPs) {
                        device.label = 'HTTPs is required to get label of this ' + device.kind + ' device.';
                    }
                } else {
                    if (device.kind === 'videoinput' && !isWebcamAlreadyCaptured) {
                        isWebcamAlreadyCaptured = true;
                    }

                    if (device.kind === 'audioinput' && !isMicrophoneAlreadyCaptured) {
                        isMicrophoneAlreadyCaptured = true;
                    }
                }

                if (device.kind === 'audioinput') {
                    hasMicrophone = true;
                }

                if (device.kind === 'audiooutput') {
                    hasSpeakers = true;
                }

                if (device.kind === 'videoinput') {
                    hasWebcam = true;
                }

                // there is no 'videoouput' in the spec.

                MediaDevices.push(device);
            });

            if (callback) {
                callback();
            }
        });
    }

    // check for microphone/camera support!
    checkDeviceSupport(function () {
        console.log('hasWebCam: ', hasWebcam);
        console.log('hasMicrophone: ', hasMicrophone);
        console.log('isMicrophoneAlreadyCaptured: ', isMicrophoneAlreadyCaptured);
        console.log('isWebcamAlreadyCaptured: ', isWebcamAlreadyCaptured);
    });


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
    // var downloadSize = 4995374;
    // var end_time = new Date().getTime(); 
    // displaySpeed();


    // function displaySpeed() { 


    //                 var timeDuration = (end_time - time_start) / 1000; 
    //                 var loadedBits = downloadSize * 8; 

    //                 /* Converts a number into string 
    //                    using toFixed(2) rounding to 2 */
    //                 var bps = (loadedBits / timeDuration).toFixed(2); 
    //                 var speedInKbps = (bps / 1024 * 1024).toFixed(2); 
    //                 var speedInMbps = (speedInKbps / 1024 * 1024).toFixed(2); 
    //                 alert("Your internet connection speed is: \n" 
    //                       + bps + " bps\n" + speedInKbps  
    //                       + " kbps\n" + speedInMbps + " Mbps\n"); 
    //             } 
    //             var time_start = new Date().getTime();




// check for microphone/camera support!
checkDeviceSupport(function() {
    console.log('hasWebCam: ', hasWebcam);
    console.log('hasMicrophone: ', hasMicrophone);
    console.log('isMicrophoneAlreadyCaptured: ', isMicrophoneAlreadyCaptured);
    console.log('isWebcamAlreadyCaptured: ', isWebcamAlreadyCaptured);
});


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
const result = browser();
console.log('Browserdetect:',result);

//Network speed
console.log('Networkspeed',`${navigator.connection.downlink}Mbps`);


const history=useHistory();



  return (<div>
    <center>
      <h3>
        SystemCheck Page
        </h3>
            <p>
                Here the Page will Check the System and Ask for Permissions
      </p>
            <p>
                If Permissions are not provided the user will not be allowed to move ahead
      </p>
            <p>
                The Permissions include: WebCamera, ScreenShare, Audio
      </p>
      <Button variant="contained" onClick={openFullscreen}>On Successful Check of the System</Button>
    </center>
  </div>
  )
}


export default SystemCheck;