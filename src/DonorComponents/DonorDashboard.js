import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"; 
import { useHistory } from 'react-router-dom';
export default function LandingComponent () {
    const history = useHistory();
 
    return(
       <div className="donor1">
            <center> <h2>DONOR DASHBOARD</h2></center><br></br>
       
       <p> <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/donors/donations/donatetoNGO")}>
       Add Donation</button></center>
       </p>
       <p> <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/")}>
       Logout</button></center>
       </p>
       
 
   </div>
    );
}