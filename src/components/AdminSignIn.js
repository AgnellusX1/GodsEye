import config from "../config";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import swal from 'sweetalert';
import './Results.css';
import firebase from "firebase/app";
// import Button from '@material-ui/core/Button';
require('firebase/auth')


const AdminSignIn = () => {
 
  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      config.auth().signInWithEmailAndPassword(email.value, password.value).then((u)=>{
        setCurrentUser(true);
      }).catch((error) =>
      {
        swal("Please Contact Admin To Register");
      });    
      
    } catch (error) {
      alert(error);
    }
  };


  if (currentUser) {
      return <Redirect to="/admin" />;
  }

  // const handleLogout=() =>{
  //   config.auth.signOut();
  // };

 
   
  return (
    
      <div className="App-header1">
      <h1 style={{color:'white'}}>Sign In</h1>
      <form onSubmit={handleSubmit} >
        <label for="email" style={{color:'white'}}>Email: </label><br/>
        <input type="email" name="email" placeholder="Email" />
        <br/><br/>
        <label for="password" style={{color:'white'}}>Password: </label><br/>
        <input type="password" name="password" placeholder="Password" />
        <br/><br/>
        <br/><br/>
        <input type="submit" class="center-block"/>
        {/* <button type="submit" align="center">Submit</button> */}
      </form>
      </div>
    
  );
}


export default AdminSignIn;


  