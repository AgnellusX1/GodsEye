import React from 'react'
import swal from 'sweetalert';
import config from "../config";
import firebase from "firebase/app";
import AdminSignUp from "./AdminSignUp";
//import signout from "./AdminSignUp";
//Calling Bootstrap 4.5 css
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
   
   
     
      firebase.database().ref("stud_records").on("value", snapshot => {
        let studentlist = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'stud_records' path
            studentlist.push(snap.val());
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

// const handleLogout=() =>{
//     config.auth.signOut();
//   };
  
  
  render(){
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center bg-sky">
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
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>

         {/* <button onClick = {this.logout}> LogOut</button> */}
          {/* <button onClick = {signout}> LogOut</button> */}
     </div>
    </div>
  );
}
}

export default Results;