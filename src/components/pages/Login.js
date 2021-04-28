import React from "react";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
  
function Login(){
  const history=useHistory();
  const handleRoute = () => {
    history.push("/sign-in");
  }
  return (
    <div class='example2'>
      <center> <h1><b>WELCOME</b></h1></center>
      <center><input type="button" varaint="bts" onClick={handleRoute} class="btn btn-info" value="NEEDYPEOPLE"/></center><br></br>
      <center><button variant="DONOR"onClick={handleRoute}>DONR</button>{' '}</center><br></br>
      <center><Button variant="ADMIN"onClick={handleRoute}>ADMIN</Button>{' '}</center><br></br>
      <center><Button variant="EMPLLOYEE"onClick={handleRoute}>EMPLOYEE</Button>{' '}</center>

    </div>
  );
};
export default Login;