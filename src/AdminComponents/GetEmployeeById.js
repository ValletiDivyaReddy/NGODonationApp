import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as employeeActions from '../store/actions/EmployeeAction';

class GetEmployeeByIdComponent extends Component {
 
    componentDidMount() {
        const { employeeActions, match } = this.props;
        employeeActions.fetchEmployeeById(match.params.id);
    }
    render() {
        const { employee } = this.props;
        return (
            <div>
                {
                    employee !== undefined ?
                        <div>
                        <div class="container"><br/>
                            <p>
                                <div><h4>Employee </h4></div>
                               <div><p>Employee Id: {employee.employeeId}</p></div> 
                               <div><p>Employee Name:{employee.employeeName}</p></div> 
                               <div><p>Email:{employee.email} </p></div>
                               <div><p>Phone:{employee.phone} </p></div>
                               <div><p>Username:{employee.username}</p></div>
                            </p>
                            <p>
                                <h4>Address:</h4>
                                <div><p>addressId:{employee.address.addressId}</p></div> 
                                <div><p>City:{employee.address.city}</p></div>
                                <div><p>State:{employee.address.state}</p></div>
                                <div><p>Pincode:{employee.address.pincode}</p></div>
                                <div><p>LandMark:{employee.address.landmark}</p></div>
                              
                            </p>
                            </div>
                        </div>
                        : <h3>Loading....</h3>
                }
            </div>
        );
    }
}
 
function mapStateToProps(state) {
 
    return { employee: state.employeeReducer.employee }
}
 
function mapDispatchToProps(dispatch) {
    return {
        employeeActions: bindActionCreators(employeeActions, dispatch)
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(GetEmployeeByIdComponent);

