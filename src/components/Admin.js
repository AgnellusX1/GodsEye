import React, { useState, useEffect } from 'react';
import config from "../config";
import firebase from "firebase/app";

import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const Admin = () => {
  const history = useHistory();

  const [examcode, setTitle] = useState('')
  const [formlink, setFormlink] = useState('')

  const onChangeexamcode = (e) => {
    setTitle(e.target.value);
  };
  const onChangeformlink = (e) => {
    setFormlink(e.target.value);
  };

  function handleClicksub() {
    
    const con_db = firebase.database().ref("con_dbs");
    //const condb={examcode:examcode,formlink:formlink};
    //con_db.set(condb);
    con_db.on('value', (snapshot) => {
  
      var s = snapshot.val()
      console.log(s)
      con_db.child(examcode).set({
        formlink: formlink
      });
      alert("The form was submitted");
      history.push("/");
    
  });
  }
    
  
   function results(){
    history.push('/results');

  };
  return (
    <body style={{backgroundColor:'#282c34'}}>
    <p>
      <center>
        <h1 style={{color:'white'}}>
          Welcome Admin
    </h1>
        <br></br>
        <h3 style={{color:'white'}}>
          Enter a unique code for the exam
    </h3>
        <br></br>
        <input type="text" id="examcode" name="examcode" value={examcode} onChange={onChangeexamcode}></input><br></br>
        <h3 style={{color:'white'}}>Enter Form Link </h3>
        <input type="text" id="formlink" name="formlink" value={formlink} onChange={onChangeformlink}></input>
        <br></br>
        <br></br>
        <Button variant="contained" onClick={handleClicksub}>Submit</Button>
        <br></br>
        <br></br>
        <br></br>
        <Button variant="contained" onClick={results}>Results</Button>
        <br></br>
      </center>
    </p>
    </body>
  )
}
export default Admin;