import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import * as employeeActions from '../store/actions/EmployeeAction';

class UpdateEmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.employeeId = React.createRef();
        this.employeeName = React.createRef();
        this.email = React.createRef();
        this.phone = React.createRef();
        this.username = React.createRef();
        this.addressId = React.createRef();
        this.city = React.createRef();
        this.state = React.createRef();
        this.pincode = React.createRef();
        this.landmark = React.createRef();

        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        const { employeeActions, match } = this.props;
        employeeActions.fetchEmployeeById(match.params.id);
    }

    updateEmployee(e) {
        e.preventDefault();

        let payload = {
            employeeId: this.employeeId.current.value,
            employeeName: this.employeeName.current.value,
            email: this.email.current.value,
            phone: this.phone.current.value,
            username: this.username.current.value,
            addressId: this.addressId.current.value,
            city: this.city.current.value,
            state: this.state.current.value,
            pincode: this.pincode.current.value,
            landmark: this.landmark.current.value,
        }

        const { employeeActions } = this.props;
        employeeActions.updateEmployee(payload);


    }

    render() {
        const { employee,update } = this.props;

        if(update !== undefined && update) {
             return <Redirect push to="/employee/all" />
        }
       
        return (
            <div>
                {
                    employee !== undefined ?
                <div class="container"><br/>
                        <form onSubmit={this.updateEmployee}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label>Employee Id:</label></td>
                                        <td><input defaultValue={employee.employeeId} class="form-control" type="text" ref={this.employeeId} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Employee Name:</label></td>
                                        <td><input defaultValue={employee.employeeName} class="form-control" type="text" ref={this.employeeName} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Email:</label></td>
                                        <td><input defaultValue={employee.email} class="form-control" type="text" ref={this.email} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Phone:</label></td>
                                        <td><input defaultValue={employee.phone} class="form-control" type="text" ref={this.phone} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Username:</label></td>
                                        <td><input defaultValue={employee.username}class="form-control"  type="text" ref={this.username} /></td>
                                    </tr>
                                    <tr>
                                        <td><h5>Address</h5></td>
                                    </tr>
                                    <tr>
                                        <td><label>AddressId:</label></td>
                                        <td><input defaultValue={employee.address.addressId} class="form-control" type="text" ref={this.addressId} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>City</label></td>
                                        <td><input defaultValue={employee.address.city}class="form-control"  type="text" ref={this.city} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>State:</label></td>
                                        <td><input defaultValue={employee.address.state} class="form-control" type="text" ref={this.state} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Pincode:</label></td>
                                        <td><input defaultValue={employee.address.pincode} class="form-control" type="text" ref={this.pincode} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>LandMark:</label></td>
                                        <td><input defaultValue={employee.address.landmark} class="form-control" type="text" ref={this.landmark} /></td>
                                    </tr>
<br/>
                                    <tr>
                                        <td> <input type="submit" class="btn btn-success"value="update"></input></td>
                                        <td><Link to="/"><button class="btn btn-danger">Cancel</button></Link></td>
                                    </tr>
                                </tbody>
                            </table>              
                        </form>
                        </div>
                        :
                        <h2>Loading....</h2>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {

    return { 
        employee: state.employeeReducer.employee,
        update : state.employeeReducer.update
     }
}

function mapDispatchToProps(dispatch) {
    return {
        employeeActions: bindActionCreators(employeeActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmployeeComponent);