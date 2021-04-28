import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom';

function LandingPage() {
    const history = useHistory();
    return (
        <div class='example2'>
            <p >
               <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/adminlogin")}
          >Admin Login</button></center>
            </p>
            <p>
                <center><button variant="default" class="btn btn-warning" onClick={()=> history.push("/donorslogin")}
          >Donor Login</button></center>
            </p>
            <p>
                <center><button variant="default" class="btn btn-warning" onClick={()=> history.push("/employeelogin")}
          >Employee Login</button></center>
            </p>
            <p>
                <center><button variant="default" class="btn btn-warning" onClick={()=> history.push("/needylogin")}
         >NeedyPeople Login</button></center>
            </p>


        </div>
    );
}

export default LandingPage;