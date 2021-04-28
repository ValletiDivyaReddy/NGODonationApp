import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as employeeActions from '../store/actions/EmployeeAction';
import { Link } from 'react-router-dom';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 16,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

class GetAllEmployeeComponent extends Component {

    componentDidMount() {

        this.props.employeeActions.fetchAllEmployees();

    }
    render() {
        return (
            <div class="emp">
                {
                  
                    this.props.employees !== undefined ?
                        <TableContainer>
                             <center><h3>Employee Details</h3></center>
                            <Table border="1" bgcolor="white" class = "table  table-bordered table-hover" >
                            
                            
                                
                                <TableHead class="thead-dark">
                                    <TableRow>
                                        <StyledTableCell>employeeId</StyledTableCell>
                                        <StyledTableCell>employeeName</StyledTableCell>
                                        <StyledTableCell>email</StyledTableCell>
                                        <StyledTableCell>phone</StyledTableCell>
                                        <StyledTableCell>username</StyledTableCell>
                                        <StyledTableCell>addressId</StyledTableCell>
                                        <StyledTableCell>city</StyledTableCell>
                                        <StyledTableCell>state</StyledTableCell>
                                        <StyledTableCell>pincode</StyledTableCell>
                                        <StyledTableCell>landmark</StyledTableCell>
                                        <StyledTableCell>View</StyledTableCell>
                                        <StyledTableCell>Update</StyledTableCell>
                                        <StyledTableCell>Delete</StyledTableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.props.employees.map((employee, index) =>

                                            <StyledTableRow>
                                                <td>{employee.employeeId}</td>
                                                <td>{employee.employeeName}</td>
                                                <td>{employee.email}</td>
                                                <td>{employee.phone}</td>
                                                <td>{employee.username}</td>
                                                <td>{employee.address.addressId}</td>
                                                <td>{employee.address.city}</td>
                                                <td>{employee.address.state}</td>
                                                <td>{employee.address.pincode}</td>
                                                <td>{employee.address.landmark}</td>
                                                <td><Link to={`/employee/${employee.employeeId}`}>View</Link></td>
                                                <td><Link to={`/employeeUpdate/${employee.employeeId}`}>Update</Link></td>
                                                <td><Link to={`/employeeDelete/${employee.employeeId}`}>Delete</Link></td>

                                            </StyledTableRow>)
                                    }
                                </TableBody>
                                
                            </Table>
                          
                        </TableContainer>
                        :
                        <h3>Loading....</h3>
                      
                }
            </div>
        );
    }
}

function mapStateToProps(state) {

    return { employees: state.employeeReducer.employees }
}

function mapDispatchToProps(dispatch) {
    return {
        employeeActions: bindActionCreators(employeeActions, dispatch)

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllEmployeeComponent);