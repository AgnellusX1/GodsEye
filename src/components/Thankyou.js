import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


const Thankyou = () => {

    function handleClickExit() {
        window.close()
    }

    var count_facedetect = sessionStorage.getItem("count_facedetect")
    console.log(count_facedetect)
    var count_fullscreen = sessionStorage.getItem("count_fullscreen")
    var count_tabchange = sessionStorage.getItem("count_tabchange")
    var countalt = sessionStorage.getItem("countalt")
    var checkn = sessionStorage.getItem("checkname")
    var checke = sessionStorage.getItem("checkemail")

    return (
        <div className="App-header">
            <center>
                <h3>
                    Thankyou for giving the test nice seeing you
            </h3>
                <h2>Cheat Score</h2>
                <br></br>
                <h3>
                    User Name :{checkn}
                    <br></br>

            User Email :{checke}
                    <br></br>

            Face Detection: {count_facedetect}
                    <br></br>

            Fullscreen Cheat Detection: {count_fullscreen}
                    <br></br>

            Tab Change Detection: {count_tabchange}
                    <br></br>

            ALT Tab Key Pressed: {countalt}
                    <br></br>
                </h3>

                <Button variant="contained" onClick={handleClickExit}>Exit Secure Window</Button>
            </center>
        </div>
    )
}
export default Thankyou;