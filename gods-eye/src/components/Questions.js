import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import "./Dashboard.css"
import "./formvalid"
var form_link = sessionStorage.getItem("form_link")
console.log(form_link)
function endit() {

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
};




document.addEventListener("visibilitychange", handleVisibilityChange, false);

export default class Timer extends Component {

    state = {

        minutes: 30,
        seconds: 0,

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



    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {

        const { minutes, seconds } = this.state
        const col = { color: 'red' };
        return (
            <div className="timesec">


                {

                    minutes < 1 ? <h1 style={col}>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1> : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }


                {
                    minutes === 0 && seconds === 0 ? endit() : null
                }


                <div className="qsection"><iframe src={form_link} id='form' width="640" height="1338" frameBorder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>

        )

    }

}
