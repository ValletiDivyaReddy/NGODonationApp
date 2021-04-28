import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as donorActions from '../store/actions/DonorAction';
import { Button } from 'react-bootstrap';

import { Redirect } from 'react-router-dom';

class DonorSignUp extends Component {

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
        this.createUser = this.createUser.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createUser(e) {
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
        donorActions.createUser(payload);

    }
    redirectToDonorDashboard = () => {
        const { history } = this.props;
        if (history) history.push('/donorsignup/:id');
    }


    render() {
        const { isLogin, user } = this.props;
        const { history } = this.props;

        if (user !== undefined) {
            if (isLogin) return <Redirect to={`/donorsignup/:id/${user.donorId}`} />;
            else return alert("invalid user")

        }
        return (
            <div className="sign3">
                <div class="col-md-5 mx-auto"><center>

                    <div class="card">
                        <div class="card-header"><h1 className="text-danger">DONOR SIGNUP</h1></div>
                        <div class="card-body" >

                            <form onSubmit={this.createUser} method="post">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><label>Donor Id:</label></td>
                                            <td><input type="text" placeholder="Donor Id" name="donorId" id="donorId" value={this.state.donorId} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Donor Name:</label></td>
                                            <td><input type="text" placeholder="Donor Name" name="donorName" id="donorName" value={this.state.donorName} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Email:</label></td>
                                            <td><input type="text" placeholder="Email" name="donorEmail" id="donorEmail" value={this.state.donoremail} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Phone:</label></td>
                                            <td><input type="text" placeholder="Phone Number" name="donorPhone" id="donorPhone" value={this.state.donorphone} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Username:</label></td>
                                            <td><input type="text" placeholder="Username " name="donorUsername" id="donorUsername" value={this.state.donorUsername} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Password:</label></td>
                                            <td><input type="password" placeholder="Password" name="donorPassword" id="donorPassword" value={this.state.donorPassword} onChange={this.handleInputChange}></input></td>
                                        </tr>

                                        <tr>
                                            <td><h5>Address</h5></td>
                                        </tr>
                                        <tr>
                                            <td><label>AddressId:</label></td>
                                            <td><input placeholder="AddressId" name="addressId" id="adressId" value={this.state.addressId} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>City</label></td>
                                            <td><input type="text" placeholder="city" name="city" id="city" value={this.state.city} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>State:</label></td>
                                            <td><input type="text" placeholder="state" name="state" id="state" value={this.state.state} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Pincode:</label></td>
                                            <td><input type="text" placeholder="pincode" name="pincode" id="pincode" value={this.state.pincode} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Landmark:</label></td>
                                            <td><input type="text" placeholder="landmark" name="landmark" id="landmark" value={this.state.landmark} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                    </tbody>
                                </table><br></br>
                                <input type="submit" value="submit"></input>

                            </form>

                            {
                                this.props.user !== undefined &&
                                alert("Donor Created Succssfully with id" + this.props.user.donorId)

                            }
                    
                    </div>
                    </div>
                    
                    </center>
                </div>
                </div>);

    }
}

function mapStateToProps(state) {

    return {user: state.donorReducer.newUser }
}

function mapDispatchToProps(dispatch) {
    return {
                        donorActions: bindActionCreators(donorActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorSignUp);