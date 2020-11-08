import React ,{Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';
import Button from '@material-ui/core/Button';
import './questionpg.css';


class questionpg extends Component{
    constructor(props){
    super(props);

}

increaseCount = () =>{
    this.setState({
        counter: 5
    });
};

render () 
{

    return(
        <Fragment>
            <Helmet><title>Exam page </title></Helmet>
            <div className = "questions">
                <div className = "lifeline-container">
                    <p>
                        <span className = "mdi mdi-set-center mdi-24px lifeline-icon"></span><span className = "lifeline">2</span>
                    </p>
                    <p>
                        <span className = "mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span><span className ="lifeline">5</span>
                    </p>
                </div>
                <div>
                    <p>
                        <span className = "left">1  of  25</span>
                        <p align = "right"> 2:15 <span className = "mdi mdi-clock-outline mdi-24px"></span></p>
                        <div className = "timer-box">Time left: 00:00</div>
                    </p>
                </div>
                <p align="center"><iframe src="https://docs.google.com/forms/d/1-CCjcOLHh8M4r167Yh7z_5N4O7fy3XncZbamfJwM8Wk/edit?ts=5fa79ea2&gxids=7757/" width="500" height="500"></iframe></p>
                

                   
            </div>
        </Fragment>
    );

        

}

}

export default questionpg;