import React from 'react'
const DetectionPage = () => {

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
        Detections Page
        </h3>
      <small>
        Add Object and Face Detections Here
        </small>
    </center>
  </div>
  )
}

export default DetectionPage;