import React from 'react';
import { useHistory } from 'react-router-dom'
import logo from './../logo.png';
import './../App.css';
import Button from '@material-ui/core/Button';


const MainPage = () => {
  //Disable Right click
  // document.addEventListener("contextmenu", (event) => {
  //   event.preventDefault();
  //   alert("This action is not allowed..and has been recorded")
  // });

  // function blurrie(){
  //   alert("Dumb")
  // }

  // document.onblur=blurrie()

  // window.addEventListener('beforeunload',function(e){
  //   e.preventDefault();
  //   alert("LOL u dead")
  //   e.returnValue="";
  // })


  const history = useHistory();

  function handleClick() {
    history.push("/login");
  }


  function Clickadmin() {
    history.push("/admin");
  }

  function handleClickFull() {
    history.push("/full");
  }

  function uleft() {
    alert("hi")
  }

  return (
    <div>

      <header className="App-header">
        <img src={logo} alt="logo" />
        
        <p>
          Welcome to GodsEye
        </p>
        <small>
          Ai enabled Virtual Examination System
        </small>

        <br/>
        <Button variant="contained" onClick={handleClick}>All the Best</Button>
<br />
        

        {/* <Button variant="contained" onClick={handleClickFull}>Go to Full</Button> */}
      </header>
    </div>
  );
}

export default MainPage;