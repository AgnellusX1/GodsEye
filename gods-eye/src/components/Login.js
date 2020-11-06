import React from 'react';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';


import MainPage from './Home'



const LoginPage = () => {

    const history = useHistory();

function handleClick() {
  history.push("/");
}

    return(        
        <div>
        <header className="App-header">
          <p>Welcome Admin</p>
          <br>
          </br>
          Enter Admin Name<input placeholder='Admin Name' type="text" name="aname"></input>
          <br>
          </br>
          Enter Admin Email<input placeholder='Admin Password' type="text" name="aemail"></input>
          <br>
          </br>
          <Button variant="contained" onClick={handleClick}>Go to Home</Button>
        </header>
      </div>
    );
    }
export default LoginPage;