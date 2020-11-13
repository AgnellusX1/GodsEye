import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        
        minutes: 1,
        seconds: 0,
    }

    componentDidMount() {
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
                { minutes === 0 && seconds === 0
                    ? <h1>Time Up!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
                <p align="center"><iframe src="https://docs.google.com/forms/d/1-CCjcOLHh8M4r167Yh7z_5N4O7fy3XncZbamfJwM8Wk/edit?ts=5fa79ea2&gxids=7757/" width="500" height="500"></iframe></p>
            </div>
            
        )
        
    }
    
}


