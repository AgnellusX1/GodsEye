import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
const Instructions = () => {

    const history = useHistory();
    function onAccept() {
        history.push('/dashboard')
    }

    //Disable Right click
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        }, false);
    }

    // Alert on Tab Changed within the Same browser Window
    function handleVisibilityChange() {
        if (document.hidden) {
            alert("You changed tab within the same browser window");
            // the page is hidden
        } else {
            // the page is visible
        }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange, false);

    return (
        <div className="App-header">
            <center>
                <h3>
                    Instructions
        </h3>
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