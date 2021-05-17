import React, { useState} from 'react';
//import config from "../config";
import firebase from "firebase/app";
import './Results.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const Admin = () => {
  const history = useHistory();

  const [examcode, setTitle] = useState('')
  const [formlink, setFormlink] = useState('')
  const [examtimer, setTimer] = useState('')
  //

  const onChangeexamcode = (e) => {
    setTitle(e.target.value);
  };
  const onChangeformlink = (e) => {
    setFormlink(e.target.value);
  };
  const onChangeTimer = (e) => {
    setTimer(e.target.value);
  };

  function handleClicksub() {
    
    const con_db = firebase.database().ref("con_dbs");

    con_db.on('value', (snapshot) => {
  
      var s = snapshot.val()
      console.log(s)
      con_db.child(examcode).set({
        formlink: formlink,
        examtimer: examtimer
      });
      alert("The form was submitted");
      history.push("/");
    
  });
  }
    
  
   function results(){
    history.push('/codecheck');

  }

  function logout(){
        localStorage.clear();
        window.location.href = '/';
    };

  return (
    <div className="App-header">
      <body style={{backgroundColor:'#282c34'}}>
    <p>
      <center>
        <h1 style={{color:'white'}} >
          <i>Welcome Admin</i>
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
        <h3 style={{color:'white'}}>Enter The Time Slot of The Exam In Minutes</h3>
        <input type="text" id="examtimer" name="examtimer" value={examtimer} onChange={onChangeTimer}></input>
        <br></br>
        <br></br>
        <br></br>
        <div className="side">
            <Button variant="contained" onClick={handleClicksub} style={{ marginLeft: '10px' }} color="primary" >Submit</Button>
        
            <Button variant="contained" onClick={results} style={{ marginLeft: '60px' }} color="secondary">Results</Button>
        </div>
        
        <br></br>
        <br></br>
        <br></br>
        <Button onClick = {logout} variant="contained"> LogOut </Button>
      </center>
    </p>
    </body>
    </div>
    
  )
}
export default Admin;