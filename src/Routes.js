import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminLoginComponent from './AdminComponents/AdminLoginComponent';
import CreateEmployeeComponent from './AdminComponents/CreateEmployeeComponent';
import DeleteEmployeeComponent from './AdminComponents/DeleteEmployeeComponent';
import GetAllEmployeeComponent from './AdminComponents/GetAllEmployeeComponent';
import GetEmployeeById from './AdminComponents/GetEmployeeById';
import CreateAdminComponent from './AdminComponents/CreateAdminComponent';
import UpdateEmployeeComponent from './AdminComponents/UpdateEmployeeComponent';
import AddNeedyPeopleComponent from './EmployeeComponents/AddNeedyPeopleComponent';
import GetAllNeedyComponent from './EmployeeComponents/GetAllNeedyComponent';
import GetNeedyPeopleById from './EmployeeComponents/GetNeedyPeopleById';
import DeleteNeedyComponent from './EmployeeComponents/DeleteNeedyComponent';
import HelpNeedyComponent from './EmployeeComponents/HelpNeedyComponent';
import NeedyLoginComponent from './NeedyComponents/NeedyLoginComponent';
import RequestComponent from './NeedyComponents/RequestComponent';
import AddDonationComponent from './DonorComponents/AddDonationComponent';
import AddDonorComponent from './DonorComponents/AddDonorComponent';
import GetAllDonationsComponent from './DonorComponents/GetAllDonationsComponent';
import GetAllDonorsComponent from './DonorComponents/GetAllDonorsComponent';
import GetDonationByIdComponent from './DonorComponents/GetDonationByIdComponent';
import GetDonorByIdComponent from './DonorComponents/GetDonorByIdComponent';
import LoginComponent from './DonorComponents/DonorLoginComponent';
import UpdateDonor from './DonorComponents/UpdateDonor';
import NavBar from "./components/NavBar";
import EmployeeDashboard from './EmployeeComponents/EmployeeDashboard';
import AdminDashboard from './AdminComponents/AdminDashboard';
import NeedyDashboard from './NeedyComponents/NeedyDashBoard';
import DonorDashboard from './DonorComponents/DonorDashboard';
import EmployeeLoginComponent from './EmployeeComponents/EmployeeLoginComponent';
import GetAllRequestComponent from './EmployeeComponents/GetAllRequestComponent';
import LandingPage from './components/LandingPage';
import { About } from "./components/pages/About";
import { Blog } from "./components/pages/Blog";
import {Contact} from "./components/pages/Contact";
import {Home} from "./components/pages/Home";
import SignUp from './components/pages/SignUp';
import NeedyPeopleSignUp from './components/NeedyPeopleSignUp';
import DonorSignUp from './components/DonorSignUp';






const Routes = () => (
    <BrowserRouter>
    <NavBar/>
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path="/about" component={About} />
             <Route path="/blog" component={Blog} />
             <Route path="/Contact" component={Contact} exact/>
             <Route path="/Login" component={LandingPage} exact/>
             <Route path="/SignUp" component={SignUp} exact/>
             ------------------------------------------------------------------------------
             <Route path="/needysignup" component={NeedyPeopleSignUp}/>
             <Route path="/donorsignup" component={DonorSignUp}/>
             ------------------------------------------------------------------------------

            <Route path={`/adminlogin/adminloginpage`} component={AdminDashboard} exact/>
            <Route path='/employee/all' component={GetAllEmployeeComponent} />
            <Route path={`/employee/add`} component={CreateEmployeeComponent} />
            <Route path={`/employee/:id`} component={GetEmployeeById} exact />
            <Route path={`/employeeDelete/:id`} component={DeleteEmployeeComponent} exact />
            <Route path={`/employeeUpdate/:id`} component={UpdateEmployeeComponent} exact />
            <Route path={`/adminlogin`} component={AdminLoginComponent} />
            <Route path={`/adminadd`} component={CreateAdminComponent} />
    --------------------------------------------------------------------------------------------------------------
            <Route path={`/employeelogin/employeeloginpage`} component={EmployeeDashboard}/>
            <Route path={`/needypeople/add`} component={AddNeedyPeopleComponent} />
            <Route path={'/needypeople/all'} component={GetAllNeedyComponent} />
            <Route path={`/needypeople/:id`} component={GetNeedyPeopleById} exact />
            <Route path={`/needypeopleDelete/:id`} component={DeleteNeedyComponent} exact />
            <Route path={`/needypeoplehelp/:id`} component={HelpNeedyComponent} />
            <Route path={`/employeelogin`} component={EmployeeLoginComponent} />
            <Route path ={`/needy/findallrequests`} component={GetAllRequestComponent}></Route>
    --------------------------------------------------------------------------------------------------------------
            <Route path={`/needylogin/needyloginpage`} component={NeedyDashboard}/>
            <Route path='/needylogin' component={NeedyLoginComponent} />
            <Route path='/needy/createrequest' component={RequestComponent} />
           
    --------------------------------------------------------------------------------------------------------------------
            <Route path={`/donorlogin/donorloginpage`} component={DonorDashboard}/>
            <Route path={'/donors/findalldonors'} component={GetAllDonorsComponent} />
            <Route path={'/donors/adddonor'} component={AddDonorComponent} />
            <Route path={'/donors/:id'} component={GetDonorByIdComponent} exact />
            <Route path={'/donors/donations/findalldonations'} component={GetAllDonationsComponent} />
            <Route path={'/donors/donations/donatetoNGO'} component={AddDonationComponent} />
            <Route path={'/donors/donations/:id'} component={GetDonationByIdComponent} />
            <Route path={'/donorslogin'} component={LoginComponent} />
            <Route path={'/donors/donorId/modifydonor/:id'} component={UpdateDonor} />
         

        </Switch>
    </BrowserRouter>
);

export default Routes