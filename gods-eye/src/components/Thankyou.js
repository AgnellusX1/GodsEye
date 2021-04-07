import React, { Component } from 'react'
//import React from 'react'
import { render } from 'react-dom';
import swal from 'sweetalert';
import count_facedetect from './Detections.js';
//console.log(count_facedetect);


    //Disable Right click
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        }, false);
    }

    // Alert on Tab Changed within the Same browser Window
    function handleVisibilityChange() {
        if (document.hidden) {
            swal("Tab Change Detected", "Action has been Recorded", "error");
            // the page is hidden
        } else {
            // the page is visible
        }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange, false);
    export default class Timer extends Component {
    render(){

        var count_facedetect = sessionStorage.getItem("count_facedetect")
        console.log(count_facedetect)
        var count_fullscreen = sessionStorage.getItem("count_fullscreen")
        var count_tabchange = sessionStorage.getItem("count_tabchange")
        var countalt = sessionStorage.getItem("countalt")
    
    return (<div className="App-header">
        <center>
            <h3>
                Thankyou for giving the test nice seeing you
        </h3>
        <h2>Cheat Score</h2>
        <br></br>
            <h3>
            Face Detection: {count_facedetect}
            <br></br>

            Fullscreen Cheat Detection: {count_fullscreen}
            <br></br>

            Tab Change Detection: {count_tabchange}
            <br></br>

            ALT Tab Key Pressed: {countalt}
            <br></br>
                
               
        </h3>
        </center>
    </div>
    )
}
}


//export default Thankyou;