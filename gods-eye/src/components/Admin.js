import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
const Admin = () => {
    const history = useHistory();

    function Clickadminback() {
        history.push("/admin");
      }
    return (<div>
        <center>
        <h3>
            Admin
        </h3>
        <small>
            This acton has been recorded
        </small>

        <Button variant="contained" onClick={Clickadminback}>Go to Login</Button>
        </center>
    </div>
    )
}

export default Admin;