import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert';
import instruction from "./instruction.jpg"
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
                    <ul>
                        <li>
                        The lighting in the room must be bright enough to be considered “daylight” quality. Overhead lighting is preferred. If overhead lighting is not available, the source of light must not be behind you.
                        </li>

                        <li>
                        Please ask others to refrain from coming into the room where you are taking your exam as you
need to be alone to take your exams.
                        </li>
                        <li >
                        Close all programs on your computer and turn off cell phones.
                        </li>
                        <li >
                        Do NOT leave the computer during the exam or answer the phone for ANY reason.
                        </li>
                         <li>
                         You must have a clear desk and clear workspace. No drinks or scrap paper.
                        </li>
                        <li>
                        Do not wear hoodies, sweatshirts, jackets, neckties, or hats
                        </li>
                        <li>
                        Do not speak to anyone during the exam
                        </li>
                        <li>
                        If any suspicious act is encountered, it will be counted as violation. After certain number of warnings, system will Logout your assessment.
                        </li>
                       
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
            <center>
                <small>
                    Click here to proceed!
                </small>
            </center>
            <br />
            <Button variant="contained" onClick={onAccept}>I Accept</Button>


        </div>
    )
}

export default Instructions;