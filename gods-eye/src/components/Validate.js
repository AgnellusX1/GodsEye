import { Button } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';
const ValidatePage = () => {

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

const history=useHistory();

function handleClick(){
  history.push("/systemcheck");
}

  return (<div>
    <center>
      <h3>
        Validate Page
    </h3>
    <p>
        When the user Successfully Signs in, the user will have to do a Validation by capturing his initial photo into the System
    </p>
    <Button variant="contained" onClick={handleClick}>
    Photo Captured Successfully
    </Button>
    </center>
  </div>
  )
}

export default ValidatePage;