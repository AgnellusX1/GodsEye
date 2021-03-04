import { Button } from '@material-ui/core';
import React from 'react'
import {useHistory} from 'react-router-dom';
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

function handleClick(){
  history.push("/validate");
}
    
//     var elem = document.documentElement;

// /* View in fullscreen */
// function openFullscreen() {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//     history.push("/instructions")
//   } else if (elem.webkitRequestFullscreen) { /* Safari */
//     elem.webkitRequestFullscreen();
//     history.push("/instructions")
//   } else if (elem.msRequestFullscreen) { /* IE11 */
//     elem.msRequestFullscreen();
//     history.push("/instructions")
//   }
// }

//browser speed test
const tester = new SpeedTester({ });
tester.start();
console.log('Browserspeed:', tester)

//Browser detection
const result = browser();
console.log('Browserdetect:',result);

//Network speed
const net = `${navigator.connection.downlink} Mbps`
console.log('Networkspeed', net);
<div id="debugDiv"></div>

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
       

      {/* <Button variant="contained" onClick={openFullscreen}>On Successful Check of the System</Button> */}
    </center>

        <center> <Button variant="contained" onClick={handleClick}>On Successful Check of the System</Button></center>

        <center>
            <pre>{"The Browser you are using is " + JSON.stringify(result,null,2 ) }</pre>
            <pre>{"Your Browser Speed is " + JSON.stringify(tester,null,2 ) }</pre>
            <pre>{"Your Network Speed is " + JSON.stringify(net,null,2 ) }</pre>
            
            
        </center>
        
  </div>
  )
}


export default SystemCheck;