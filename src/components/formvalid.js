import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';
import "./formvalid.css"
import swal from 'sweetalert';

const Formvalid = () => {
  const history = useHistory();

  //Disable Right click
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }

  const [formvalid, setFormvalid] = useState('');
  

  function onChangeformvalid(e) {
    setFormvalid(e.target.value);
  }
  
  

  function handleClickformvalid() {
    console.log(formvalid)
    const con_db = firebase.database().ref("con_dbs");

    //console.log(Object.keys(con_db))
    con_db.on('value', (snapshot) => {
      var s = snapshot.val()
      var d = s[formvalid]
      //var e = s[examtimer]
      console.log("check1")
      //console.log(e)
      if (d != null) {
        var form_link = d["formlink"]
        var exam_timer = d["examtimer"]
        console.log(exam_timer);
        console.log(form_link);
        sessionStorage.setItem("form_link", form_link);
        sessionStorage.setItem("exam_timer",exam_timer);
        history.push("/dashboard");
      }
      else {
        swal("Invalid Exam Code", "Please Enter A Valid Examcode", "error");
      }

    });
  };

  return (
    // <h3><p  align="center" color="white" >Enter Exam Code To Proceed</p></h3>
    <div className="App-header1">
      <h3><p  align="center" style={{color:'white'}} >Enter Exam Code To Proceed</p></h3>
      <center>
      
      <td class="text-center">
        <input type="text" id="formvalid" name="formvalid" value={formvalid} onChange={onChangeformvalid}></input>
        <br></br>
        <br></br>
        <Button variant="contained" onClick={handleClickformvalid}>Submit</Button>
      </td>
      <br></br>
    </center>
    </div>
      

  
  
  )
}

export default Formvalid;