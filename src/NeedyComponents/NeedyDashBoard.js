import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export default function NeedyDashBoard () {
    const history = useHistory();
    return(
       <div className="needy2">
            <center><h2>NeedyDashboard</h2></center><br></br>
       <p><center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/needy/createrequest")}>
       Create Request</button></center>
       </p>

       <p> <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/")}>
       Logout</button></center>
       </p>
      
     
 
   </div>
    );
}