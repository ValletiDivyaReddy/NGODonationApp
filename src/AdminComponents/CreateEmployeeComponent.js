import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as employeeActions from '../store/actions/EmployeeAction';
import { Button } from 'react-bootstrap';
 
class CreateEmployeeComponent extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            employeeId: '',
            employeeName: '',
            email: '',
            phone: '',
            username: '',
            address: {
                 addressId: '',
                 city: '',
                 state: '',
                 pincode: '',
                 landmark: ''   
        }
    }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createEmployee = this.createEmployee.bind(this);
    }
 
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
 
    createEmployee(e) {
        e.preventDefault();
        
        let payload = {
            employeeId: this.state.employeeId,
            employeeName: this.state.employeeName,
            email: this.state.email,
            phone: this.state.phone,
            username:this.state.username,
            addressId: this.state.addressId,
            city: this.state.city,          
            state: this.state.state,
            pincode: this.state.pincode,
            landmark: this.state.landmark
        }
        
        const { employeeActions } = this.props;
        employeeActions.createEmployee(payload);        
 
    }
 
    clear = () => {
        this.setSate = ({
            employeeId: '',
            employeeName: '',
            email: '',
            phone: '',
            username: '',
            address: {
                 addressId: '',
                 city: '',
                 state: '',
                 pincode: '',
                 landmark: ''   
        }     
        });
    }


    render() {
        return (
            <div className="addemp">
                <center><h3>Add Employee</h3></center>
                <form onSubmit={this.createEmployee}>
                    <center>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Employee Id:</label></td>
                                    <td><input type="text" class="form-control"  placeholder="Employee Id" name="employeeId" id="employeeId" value={this.state.employeeId} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Employee Name:</label></td>
                                    <td><input type="text"  class="form-control"  placeholder="Employee Name" name="employeeName" id="employeeName" value={this.state.employeeName} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Email:</label></td>
                                    <td><input type="text" class="form-control"   placeholder="Email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Phone:</label></td>
                                    <td><input type="text" class="form-control"  placeholder="Phone Number" name="phone" id="phone" value={this.state.phone} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                <td><label>Username:</label></td>
                                    <td><input type="text" class="form-control"  placeholder="Username " name="username" id="username" value={this.state.username} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><h5>Address</h5></td>
                                </tr>
                                <tr>
                                    <td><label>AddressId:</label></td>
                                    <td><input placeholder="AddressId" class="form-control"   name="addressId" id="adressId" value={this.state.addressId} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>City</label></td>
                                    <td><input type="text" placeholder="city" class="form-control"  name="city" id="city" value={this.state.city} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>State:</label></td>
                                    <td><input type="text" placeholder="state" class="form-control"  name="state" id="state" value={this.state.state} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Pincode:</label></td>
                                    <td><input type="text" placeholder="pincode" class="form-control"  name="pincode" id="pincode" value={this.state.pincode} onChange={this.handleInputChange}></input></td>
                                </tr> 
                                <tr>
                                    <td><label>Landmark:</label></td>
                                    <td><input type="text" placeholder="landmark" class="form-control"  name="landmark" id="landmark" value={this.state.landmark} onChange={this.handleInputChange}></input></td>
                                </tr>

                            </tbody>
                        </table>
                        </center>
                        <center><br></br>
                        <input type="submit" class="bt btn-success" value="submit"></input></center>
                </form>
                
                {
                this.props.employee !== undefined &&
                alert("Employee Created Successfully with id")
                 }
                  </div> );
                  } 
}


function mapStateToProps(state) {

    return { employee: state.employeeReducer.newEmployee }
}

function mapDispatchToProps(dispatch) {
    return {
        employeeActions: bindActionCreators(employeeActions, dispatch)

    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployeeComponent);
