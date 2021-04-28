import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom';
export default function AdminDashboard () {
    const history = useHistory();
    return(
       <div className="admin1">
      <center> <h2>ADMIN DASHBOARD</h2></center><br></br>
       <p> <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/employee/all")}>
         All Employees</button></center>
       </p>
       <p><center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/employee/add")}>
         
        Create Employee</button></center>
       </p>
       <p><center><button variant="default"   class="btn btn-warning" onClick={()=> history.push("/adminadd")}>
        
           Create Admin</button></center>
       </p>

     <p> <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/")}>
       Logout</button></center>
       </p>     
 
   </div>
    );
}