import React from 'react'
const Thankyou = () => {

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

    return (<div className="App-header">
        <center>
            <h3>
                Thankyou for giving the test
        </h3>
            <small>
                Nice Seeing you
        </small>
        </center>
    </div>
    )
}

export default Thankyou;