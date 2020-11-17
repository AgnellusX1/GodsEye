import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
import FormGroup from '@material-ui/core/FormGroup'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Firebase Imports
import firebaseConfig from '../firebase.config';

import { GoogleLogin } from 'react-google-login'

const client_id = "544104470592-tmud4b78eecjhd58aft6qrg84jfoqq9h.apps.googleusercontent.com"

const LoginPage = () => {


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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");


  const onSuccess = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    setName(profile.getName());
    setEmail(profile.getEmail());
    setUrl(profile.getImageUrl());
    history.push("/instructions")
  };

  const onFaliure = (res) => {
    console.log('[Login Success] res:', res);
  };

  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  function handleClickDashboard() {
    history.push("/dashboard")

  }

  function handleClickquestionpg() {
    history.push("/questionpg")
  }


  return (
    <div>
      <head>
        <script src="https://apis.google.com/js/platform.js" async defer></script>

        <meta name="google-signin-client_id" content="544104470592-tmud4b78eecjhd58aft6qrg84jfoqq9h.apps.googleusercontent.com"></meta>


      </head>
      <header className="App-header">
        <h1>Login</h1>
        {/* <FormGroup>
          <TextField id="standard-basic" name="username" label="UserName" />
          <TextField id="standard-password-input" name="password" type="password" label="Password" />
          <br />
          <Button variant="contained" onClick={handleClickDashboard} color="primary">Login</Button>
        </FormGroup> */}
        {/* <br></br> */}

        {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}



        <GoogleLogin

          clientId={client_id}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFaliure}
          prompt="select_account"
          cookiePolicy={'single_host_origin'}
          isSignedIn={false}
        />


        {/* <br/>

        <h3>
            Dashboard
        </h3>
        <h4>
            Name: {name}
        </h4>
        <h4>
            Email: {email}
        </h4>
        <img src={url} alt={name}></img> */}

        {/* Enter Admin Name<input placeholder='Admin Name' type="text" name="aname"></input>
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
          <Button variant="contained" onClick={handleClickquestionpg}>Go to Question Page</Button> */}
      </header>
    </div>
  );
}
export default LoginPage;