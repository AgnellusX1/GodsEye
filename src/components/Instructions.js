import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import instruction from "./instruction.jpg"
import "./Dashboard2.css"
const Instructions = () => {

    const history = useHistory();
    function onAccept() {
        history.push('/formvalid')
    }

    //Disable Right click
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        }, false);
    }

    // // Alert on Tab Changed within the Same browser Window
    // function handleVisibilityChange() {
    //     if (document.hidden) {
    //         swal("Tab Change Detected", "Action has been Recorded", "error");
    //         // the page is hidden
    //     } else {
    //         // the page is visible
    //     }
    // }

    // document.addEventListener("visibilitychange", handleVisibilityChange, false);

    return (
        <div className="App-header">
            <center>
                <h2>
                   <b>Instructions To Follow:</b> 
                 </h2>
            </center>
            <table align="center">
            <tbody><tr>
                <td class="text-center">
                    <div>
                        <img src={instruction} id="instructionIcon" />
                    </div>
                </td>
                <td>
                    <ul className="givesize">
                        <br/>
                        <li>
                        The lighting in the room must be bright enough to be considered “daylight” quality. Overhead lighting is preferred. 
                        </li>
                        <li>
                        Recommended to have a plain white background, no wall hangings, photo frames allowed.
                        </li>
                        <li>
                        Recommended to use lastest version of Chrome or Edge for better experience throughout the exam.
                        </li>
                        <li>
                        You are advised to be at the location where there is a good internet connectivity.
                        </li>
                        <li>
                        Make sure that the gadget which you are using is fully charged before the commencement of the examination
                        </li>
                        <li>
                        Your Webcam should be on throughout the exam.
                        </li>

                        <li>
                        Please ask others to refrain from coming into the room where you are taking your exam as you
need to be alone to take your exams.
                        </li>
                        <li >
                        Close all programs on your computer and turn off cell phones.
                        </li>
                        <li >
                        You are not allowed to leave your seat during complete examination time.
                        </li>
                         <li>
                         You must have a clear desk and clear workspace. No drinks or scrap paper.
                        </li>
                        <li>
                        Do not wear hoodies, sweatshirts, jackets, neckties, headphoes/earphones or hats.
                        </li>
                        <li>
                        Do not speak to anyone during the exam.
                        </li>
                        <li>
                        Following activities during examination will be treated as unfair means / malpractice case
                        <br/>
a. Moving away from the screen.
<br/>
b. Browsing other websites,opening multiple tabs and sharing the same with any other person or on social media
<br/>
c. Running any other application on the gadget through which you are appearing for the examination
                        </li>
                        <li>
                        If any suspicious act is encountered, it will be counted as violation. After certain number of warnings, system will Logout your assessment.
                        </li>
                       <li>
                        PLEASE DONOT ESCAPE FULLSCREEN ELSE ANSWERS WILL BE RESETTED !!!
                      </li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
            <center>
                <small>
                    Accept To Proceed!!
                </small>
            </center>
            <br />
            <Button variant="contained" onClick={onAccept}>I Accept</Button>
            <br/>
            <br/>


        </div>
    )
}

export default Instructions;