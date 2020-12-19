import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


function Goto() {
    alert("1 MINUTE LEFT, Submitting time!!");
    
    }
function endit(){

        return <Redirect to ="/thankyou"/>
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
        
        minutes: 1 ,
        seconds: 25,
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
        return (
            <div>

                {

                    minutes === 1 && seconds === 0 ? Goto() :  <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                    
                }
               
                {
                    minutes === 0 && seconds === 0 ? endit() : null
                }
                
                
                <p align="center"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfE59T1OL3G22S8b_CFqHUtPd4mdxYIQyj6CEcShw1XdJ_0ow/viewform?embedded=true" id = 'form' width="640" height="1338" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></p>
                
                
            </div>

        )

    }
    

    

}
