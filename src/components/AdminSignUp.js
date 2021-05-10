import config from "../config";
import React, { useState } from "react";
//import TextField from "@material-ui/core/TextField";
import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import firebase from "firebase/app";
require('firebase/auth')


const AdminSignUp = () => {
 
  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      config.auth().signInWithEmailAndPassword(email.value, password.value).then((u)=>{
        setCurrentUser(true);
      }).catch((error) =>
      {
        alert("Please register");
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
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} >
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit" >Submit</button>
      </form>
    </>
  );
}


export default AdminSignUp;


  