import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import thanks from "./thanks.png"

const Thankyou = () => {

    function handleClickExit() {
        window.close()
    }

    var count_facedetect = sessionStorage.getItem("count_facedetect")
    //console.log(count_facedetect)
    var count_fullscreen = sessionStorage.getItem("count_fullscreen")
    var count_tabchange = sessionStorage.getItem("count_tabchange")
    var countalt = sessionStorage.getItem("countalt")
    var checkn = sessionStorage.getItem("checkname")
    var checke = sessionStorage.getItem("checkemail")

    return (
        <div className="App-header">
            <center>
                {/* <h3>
                    Thankyou for giving the test 
                </h3> */}
                <img src={thanks} id="thankyou"  height="400px"/>
                {/* <h2>Cheat Score</h2> */}
                <br/>
                <br/>
                <h3>
                    User Name :{checkn}
                    <br/>
                    <br/>
                    User Email :{checke}
                </h3>

            
                    {/* <br/> */}

                    {/* Face,Object Detection: {count_facedetect}  */}
                    {/* <br/> */}

                    {/* Fullscreen Cheat Detection: {count_fullscreen} */}
                    {/* <br/> */}

                    {/* Tab Change Detection: {count_tabchange} */}
                    {/* <br/> */}

                    {/* ALT Tab Key Pressed: {countalt} */}
                    {/* <br/> */}
                    <br/>
                    <br/>

                <Button variant="contained" onClick={handleClickExit}>Exit Secure Window</Button>
            </center>
        </div>
    )
}
export default Thankyou;