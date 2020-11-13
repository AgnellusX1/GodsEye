import React from 'react';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';


import MainPage from './Home'



const LoginPage = () => {

    const history = useHistory();

function handleClick() {
  history.push("/");
}
function handleClickDashboard(){
  history.push("/Dashboard")
}

function handleClickquestionpg(){
  history.push("/questionpg")
}

    return(        
        <div>
        <header className="App-header">
          <p>Welcome Student</p>
          <br>
          </br>
          Enter Exam Link<input placeholder='examlink' type="text" name="elink"></input>
          <br></br>
          <Button variant="contained" onClick={handleClickDashboard}>Validate</Button>
          
          Enter Admin Name<input placeholder='Admin Name' type="text" name="aname"></input>
          <br>
          </br>
          Enter Admin Email<input placeholder='Admin Password' type="text" name="aemail"></input>
          <br>
          </br>
          <Button variant="contained" onClick={handleClick}>Go to Home</Button>
          <br/>
          <Button variant="contained" onClick={handleClickDashboard}>Go to Dashboard</Button>
          <br/>
          <Button variant="contained" onClick={handleClickquestionpg}>Go to Question Page</Button>
        </header>
      </div>
    );
    }
export default LoginPage;