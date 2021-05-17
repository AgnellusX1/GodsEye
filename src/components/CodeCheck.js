import React, { useState } from 'react';
import firebase from "firebase/app";
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';
//import { Redirect } from "react-router-dom";
import swal from 'sweetalert';
const CodeCheck = () => {
  const history = useHistory();
    const [inputcode, setInputcode] = useState('');

    function onChangeInputcode(e) {
    setInputcode(e.target.value);
  }
   var code_exist = false;
  
  
    function Getdata() {
        const res = firebase.database().ref("stud_records").once('value',(snapshot)=>{
        snapshot.forEach(function(snapshot) {

            var childKey = snapshot.key;
            //console.log("check childkey", childKey)
            if(childKey === inputcode)
            {
              sessionStorage.setItem("inputcode", inputcode);
              //console.log("Show sucess" ,childKey);
              code_exist = true;
              swal("Success");
              history.push("/results"); 
            }
          }); 
          if(code_exist === false){
            swal("Incorrect Code");
          }        
      });      
    }
  

    return (
    <div className="App-header1">
    <h3>Enter Exam Code</h3>
      <input type="text" name="inputcode" id="inputcode" onChange={onChangeInputcode} value={inputcode}></input>

      <br></br>
    <Button variant="contained" onClick={Getdata}>Submit</Button>
  </div>
  )
}

export default CodeCheck;