import React, { Component } from 'react'
// import ThankyouPage from './components/Thankyou'
import { useHistory } from 'react-router-dom'

export default class Timer extends Component {

    state = {
        
        minutes: 1,
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

    //      function submitform(){
    //                     if( minutes === 0 && seconds === 0) // Calling validate function.
    //                     { 
    //                         //alert('Submitting.....');
    //                         // document.getElementById("https://docs.google.com/forms/d/e/1FAIpQLSfE59T1OL3G22S8b_CFqHUtPd4mdxYIQyj6CEcShw1XdJ_0ow/viewform?embedded=true").submit();
                            
                            
    //                         history.push('/thankyou')
    //                     }
    //                 }
    // }

    componentWillUnmount(){
        clearInterval(this.myInterval)
    }

   


    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
                {
                    minutes === 0 && seconds === 0 ? alert("Saved and Submitted") : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                    
                    //alert("Submitted");   
                }

                {/* if (minutes===0 && seconds===0){
                        alert("Times up");
                    } */}
                    {/* setInterval(submitform,5000); */}
{/*                     
                     {
                        submitform();
                    }, 5000);
                              */}
                            
                <p align="center"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfE59T1OL3G22S8b_CFqHUtPd4mdxYIQyj6CEcShw1XdJ_0ow/viewform?embedded=true" width="640" height="1338" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></p>
            </div>

            
            
        )
        
    }
    
}


