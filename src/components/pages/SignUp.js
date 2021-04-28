import React from "react";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
  
function SignUp() {
    const history = useHistory();
    return (
        <div class='sign1'>
            <p >
               <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/needysignup")}
          >Needy People Sign Up</button></center>
            </p>
            <p>
                <center><button variant="default" class="btn btn-warning" onClick={()=> history.push("/donorsignup")}
          >Donor Sign Up</button></center>
            </p>

        </div>
    );
}

export default SignUp;