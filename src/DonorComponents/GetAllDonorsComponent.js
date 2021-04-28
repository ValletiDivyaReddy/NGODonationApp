import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as donorActions from '../store/actions/DonorAction';
import {Link} from 'react-router-dom';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
 
class GetAllDonorsComponent extends Component {
 
    componentDidMount() {      
        this.props.donorActions.fetchAllDonors();
    }
    render() {
        return (
            <div className="donor2">
                <center>
                {
                    this.props.donors !== undefined ?
 
                    <Table border="1" bgcolor="white" class = "table  table-bordered table-hover" >
                            
                            
                            <caption>Donor Details</caption>
                            <TableHead class="thead-dark">
                                <tr>
                                    <th>Donor ID</th>
                                    <th>Donor Name</th>
                                    <th> Email</th>
                                    <th>UserName</th>
                                    <th>Ph.No</th>
                                    <th>Password</th>
                                    <th>AddressId</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Pincode</th>
                                    <th>Landmark</th>
                                    <th> view Details</th>
                                    <th> Update details</th>
                                </tr>
                            </TableHead>
                            <tbody>
                                {
                                   this.props.donors.map((donor, index) =>
                                        <tr>
                                            <td>{donor.donorId}</td>
                                            <td>{donor.donorName}</td>
                                            <td>{donor.donorEmail}</td>
                                            <td>{donor.donorUsername}</td>
                                            <td>{donor.donorPhone}</td>
                                            <td>{donor.donorPassword}</td>
                                            <td>{donor.address.addressId}</td>
                                            <td>{donor.address.city}</td>
                                            <td>{donor.address.state}</td>
                                            <td>{donor.address.pincode}</td>
                                            <td>{donor.address.landmark}</td>
                                            <td><Link to={`/donors/${donor.donorId}`}>View</Link></td>
                                            <td><Link to={`/donors/donorId/modifydonor/${donor.donorId}`}>Update</Link></td>
                                            
                                         </tr>)
                                }
                            </tbody>
 
                        </Table>
 
                        :
                        <h3>Loading....</h3>
                }
                </center>



            </div>
        );
    }
}
 
function mapStateToProps(state) {
 
    return { donors: state.donorReducer.donors }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      donorActions : bindActionCreators(donorActions,dispatch)      
   }   
  };
 
export default connect(mapStateToProps,mapDispatchToProps) (GetAllDonorsComponent);