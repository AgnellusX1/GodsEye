import { Button } from '@material-ui/core';
import React from 'react'
import {useHistory} from 'react-router-dom';
const SystemCheck = () => {

  //Disable Right click
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }

  // Alert on Tab Changed within the Same browser Window
  function handleVisibilityChange() {
    if (document.hidden) {
      alert("You changed tab within the same browser window");
      // the page is hidden
    } else {
      // the page is visible
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange, false);


// List cameras and microphones.
navigator.mediaDevices.enumerateDevices()
.then(function(devices) {
  devices.forEach(function(device) {
    console.log(device.kind + ": " + device.label +" id = " + device.deviceId);
  });
})
.catch(function(err) {
  console.log(err.name + ": " + err.message);
});


  const history=useHistory();

  function handleClick(){
    history.push("/instructions")
  }

  return (<div>
    <center>
      <h3>
        SystemCheck Page
        </h3>
      <p>
          Here the Page will Check the System and Ask for Permissions
      </p>
      <p>
          If Permissions are not provided the user will not be allowed to move ahead
      </p>
      <p>
          The Permissions include: WebCamera, ScreenShare, Audio
      </p>
      <Button variant="contained" onClick={handleClick}>On Successful Check of the System</Button>
    </center>
  </div>
  )
}

export default SystemCheck;