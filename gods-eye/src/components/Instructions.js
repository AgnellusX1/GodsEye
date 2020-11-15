import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
const Instructions = () => {

    const history = useHistory();
function onAccept(){
    history.push('/dashboard')
}


    return (
    <div className="App-header">
        <center>
        <h3>
            Instructions
        </h3>
        <small>
            The Instructions will appper here
        </small>
        </center>
        <br />
        <Button variant="contained" onClick={onAccept}>I Accept</Button>
    </div>
    )
}

export default Instructions;