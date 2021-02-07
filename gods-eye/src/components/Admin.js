import React, { useState, useEffect } from 'react';
import config from "../config";
import firebase from "firebase/app";

import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const Admin = () => {

  const [examcode, setTitle] = useState('')
  const [formlink, setFormlink] = useState('')

  const onChangeexamcode = (e) => {
    setTitle(e.target.value);
  };
  const onChangeformlink = (e) => {
    setFormlink(e.target.value);
  };

  function handleClicksub() {
    alert("The form was submitted");
    const con_db = firebase.database().ref("con_dbs");
    //const condb={examcode:examcode,formlink:formlink};
    //con_db.set(condb);
    con_db.child(examcode).set({
      formlink: formlink
    });

  };
  return (
    <p>
      <center>
        <h1>
          Welcome to admin Page
    </h1>
        <br></br>
        <h3>
          Enter a unique code for the test
    </h3>
        <br></br>
        <input type="text" id="examcode" name="examcode" value={examcode} onChange={onChangeexamcode}></input><br></br>
        <h3>Enter Form Link </h3>
        <input type="text" id="formlink" name="formlink" value={formlink} onChange={onChangeformlink}></input>
        <br></br>
        <br></br>
        <Button variant="contained" onClick={handleClicksub}>Submit</Button>
        <br></br>
      </center>
    </p>
  )
}
export default Admin;