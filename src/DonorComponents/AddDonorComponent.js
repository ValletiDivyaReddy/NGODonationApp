import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as donorActions from '../store/actions/DonorAction';
import { Button } from 'react-bootstrap';

class AddDonorComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            donorId: '',
            donorName: '',
            donorEmail: '',
            donorPhone: '',
            donorUsername: '',
            donorPassword: '',

            
                addressId: '',
                city: '',
                state: '',
                pincode: '',
                landmark: ''
            
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addDonor = this.addDonor.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addDonor(e) {
        e.preventDefault();

        let payload = {
            donorId: this.state.donorId,
            donorName: this.state.donorName,
            donorEmail: this.state.donorEmail,
            donorPhone: this.state.donorPhone,
            donorUsername: this.state.donorUsername,
            donorPassword: this.state.donorPassword,
            addressId: this.state.addressId,
            city: this.state.city,
            state: this.state.state,
            pincode: this.state.pincode,
            landmark: this.state.landmark
        }

        const { donorActions } = this.props;
        donorActions.addDonor(payload);

    }

    clear = () => {
        this.setSate = ({
            donorId: '',
            donorName: '',
            donorEmail: '',
            donorPhone: '',
            donorUsername: '',
            donorPassword: '',
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
            <div className="donor3">
                <div class="container">
                    <br/>
                <center>
                <h3>Add Donor</h3>
                <form onSubmit={this.addDonor}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Donor Id:</label></td>
                                <td><input type="text" placeholder="Donor Id" class="form-control" name="donorId" id="donorId" value={this.state.donorId} onChange={this.handleInputChange}></input></td>
                            </tr>
                            <tr>
                                <td><label>Donor Name:</label></td>
                                <td><input type="text" placeholder="Donor Name" class="form-control" name="donorName" id="donorName" value={this.state.donorName} onChange={this.handleInputChange}></input></td>
                            </tr>
                            <tr>
                                <td><label>Email:</label></td>
                                <td><input type="text" placeholder="Email" class="form-control" name="donorEmail" id="donorEmail" value={this.state.donoremail} onChange={this.handleInputChange}></input></td>
                            </tr>
                            <tr>
                                <td><label>Phone:</label></td>
                                <td><input type="text" placeholder="Phone Number" class="form-control" name="donorPhone" id="donorPhone" value={this.state.donorphone} onChange={this.handleInputChange}></input></td>
                            </tr>
                            <tr>
                                <td><label>Username:</label></td>
                                <td><input type="text" placeholder="Username " class="form-control" name="donorUsername" id="donorUsername" value={this.state.donorUsername} onChange={this.handleInputChange}></input></td>
                            </tr>
                            <tr>
                                <td><label>Password:</label></td>
                                <td><input type="password" placeholder="Password" class="form-control" name="donorPassword" id="donorPassword" value={this.state.donorPassword} onChange={this.handleInputChange}></input></td>
                            </tr>

                            <tr>
                                <td><h5>Address</h5></td>
                            </tr>
                            <tr>
                                <td><label>AddressId:</label></td>
                                <td><input placeholder="AddressId" class="form-control" name="addressId"   id="adressId" value={this.state.addressId} onChange={this.handleInputChange}></input></td>
                            </tr>
                            <tr>
                                <td><label>City</label></td>
                                <td><input type="text" placeholder="city" class="form-control" name="city" id="city" value={this.state.city} onChange={this.handleInputChange}></input></td>
                            </tr>
                            <tr>
                                <td><label>State:</label></td>
                                <td><input type="text" placeholder="state"class="form-control"  name="state" id="state" value={this.state.state} onChange={this.handleInputChange}></input></td>
                            </tr>
                            <tr>
                                <td><label>Pincode:</label></td>
                                <td><input type="text" placeholder="pincode" class="form-control" name="pincode" id="pincode" value={this.state.pincode} onChange={this.handleInputChange}></input></td>
                            </tr>
                            <tr>
                                <td><label>Landmark:</label></td>
                                <td><input type="text" placeholder="landmark" class="form-control" name="landmark" id="landmark" value={this.state.landmark} onChange={this.handleInputChange}></input></td>
                            </tr>

                        </tbody>
                    </table><br></br>
                    <input type="submit" value="adddonor" className="btn btn-success"></input>
                    
                </form>
                </center>
                {
                    this.props.donor !== undefined &&
                    alert("Donor Created Succssfully with id" + this.props.donor.donorId)
                }
                </div>
            </div>);
    }
}

function mapStateToProps(state) {

    return { donor: state.donorReducer.donor }
}

function mapDispatchToProps(dispatch) {
    return {
        donorActions: bindActionCreators(donorActions, dispatch)

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDonorComponent);