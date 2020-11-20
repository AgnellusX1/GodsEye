import React, { Component } from 'react'

import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom';

    // const button = document.querySelector("button");
    // const timeLimitMinutes = 1; // low number for demo; change to 20 for application
    // const timeLimitMilliseconds = timeLimitMinutes * 60 * 1000;
    //   // For this demo we are not going to serve a response page, so don't try to.
    // button.addEventListener("submit", submitEvent => submitEvent.preventDefault());
    //   // attach our custom submit to both the button and to the timeout
    // button.addEventListener("click", submitForm)
    // window.setTimeout(submitForm, timeLimitMilliseconds)


function Goto() {
    alert("Saved and Submitted.");
    return <Redirect to="/thankyou" />
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

export default class Timer extends Component {



    state = {
        
        minutes: 0 ,
        seconds: 15,
    }

    componentDidMount() {
        // const history = useHistory();
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    //      function submitform(){
    //                     if( minutes === 0 && seconds === 0) // Calling validate function.
    //                     { 
    //                         //alert('Submitting.....');
    //                         // document.getElementById("https://docs.google.com/forms/d/e/1FAIpQLSfE59T1OL3G22S8b_CFqHUtPd4mdxYIQyj6CEcShw1XdJ_0ow/viewform?embedded=true").submit();


    //                         history.push('/thankyou')
    //                     }
    //                 }
    // }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() 
    {





    render() {

        const { minutes, seconds } = this.state
        return (
            <div>

                {

                    minutes === 0 && seconds === 0 ? Goto() : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>

                }

                <p align="center"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfE59T1OL3G22S8b_CFqHUtPd4mdxYIQyj6CEcShw1XdJ_0ow/viewform?embedded=true" width="640" height="1338" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></p>



            </div>

        )

    }

}


