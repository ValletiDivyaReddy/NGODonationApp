import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"; 
import { useHistory } from 'react-router-dom';
export default function EmployeeDashboard () {
    const history = useHistory();
    return(
        <div className= "emp2">
      
       <center> <h2>Employee Dashboard</h2></center><br></br>
       <p> <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/needypeople/add")}>
       Add needy People</button></center>
       </p>

       <p> <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/needypeople/all")}>
       All NeedyPeople</button></center>
       </p>
       <p> <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/needy/findallrequests")}>
       Find All Requests</button></center>
       </p>
      
       <p> <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/donors/donations/findalldonations")}>
       All Donations</button></center>
       </p>
       <p> <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/donors/findalldonors")}>
       All Donors</button></center>
       </p>

       <p> <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/")}>
       Logout</button></center>
       </p>



       

 
   </div>
    );
}