import React from 'react'
const PageNotFound = () => {

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

  return (<div>
    <center>
      <h3>
        Page Not Found
        </h3>
      <small>
        This acton has been recorded
        </small>
    </center>
  </div>
  )
}

export default PageNotFound;