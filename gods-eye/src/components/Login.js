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

    return(        
        <div>
        <header className="App-header">
          <p>Welcome Student</p>
          <br>
          </br>
          Enter Exam Link<input placeholder='examlink' type="text" name="elink"></input>
          <br></br>
          <Button variant="contained" onClick={handleClickDashboard}>Validate</Button>
          </header>
      </div>
    );
    }
export default LoginPage;