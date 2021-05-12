import React from 'react'
import swal from 'sweetalert';
import config from "../config";
import firebase from "firebase/app";
import AdminSignIn from "./AdminSignIn";
import { Button } from '@material-ui/core';
import CodeCheck from "./CodeCheck";
import './Results.css';
import 'bootstrap/dist/css/bootstrap.min.css';


 
   
class Results extends React.Component {
   

constructor(props) {
    
    super(props);
   //this.logout = this.logout.bind(this);
    this.state = {studentslist : []}
    }

  //  logout(){
  //   config.auth().signOut();
//}
    
  componentDidMount() {
  var  childcode = sessionStorage.getItem("inputcode");
  console.log("Checktable", childcode);
   
      firebase.database().ref("stud_records").child(childcode).on("value", snapshot => {
     
        let studentlist = [];
        snapshot.forEach(snap => {
        // snap.val() is the dictionary with all your keys/values from the 'stud_records' path
            studentlist.push(snap.val());
            console.log("Chekit" ,studentlist);
        });
        this.setState({ studentslist: studentlist });
      });     
 }

// const signout=()=> {
//  config.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });
// }

logout() {
        localStorage.clear();
        window.location.href = '/';
    }

// const handleLogout=() =>{
//     config.auth.signOut();
//   };
  
  
  render(){
  return (
    <div className="MainDiv">
      <div class="givecolor">
          <h3>Cheat Score Records</h3>
           
      </div>
    
      <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Alt</th>
                    <th>Face</th>
                    <th>Fullscreen</th>
                    <th>Tab</th>
                </tr>
            </thead>
            <tbody>
            {this.state.studentslist.map(data => {
                
                return (
                    <tr>     
                    <td>{data.sname}</td>
                    <td>{data.semail}</td>
                    <td>{data.alt}</td>
                    <td>{data.face}</td>
                    <td>{data.fullscreen}</td>
                    <td>{data.tab}</td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
     </div>
             <div className="center-block"><Button onClick = {this.logout} variant="contained"> LogOut </Button></div>
    </div>
     
  );
}
}

export default Results;