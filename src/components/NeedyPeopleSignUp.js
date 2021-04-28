import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as needyActions from '../store/actions/NpActions';
import { Button } from 'react-bootstrap';

class NeedyPeopleSignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            needyPersonId: '',
            needyPersonName: '',
            phone: '',
            familyIncome: '',
            address: {
                addressId: '',
                city: '',
                state: '',
                pincode: '',
                landmark: ''
            }
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
            needyPersonId: this.state.needyPersonId,
            needyPersonName: this.state.needyPersonName,
            phone: this.state.phone,
            familyIncome: this.state.familyIncome,
            addressId: this.state.addressId,
            city: this.state.city,
            state: this.state.state,
            pincode: this.state.pincode,
            landmark: this.state.landmark
        }

        const { needyActions } = this.props;
        needyActions.createUser(payload);

    }

    clear = () => {
        this.setSate = ({
            needyPersonId: '',
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
            <div className="sign2">
                <div class="col-md-5 mx-auto"><center>
                  
                    <div class="card">
                        <div class="card-header"><h1 className="text-danger">NEEDY SIGNUP</h1></div>
                        <div class="card-body" >
                            <form onSubmit={this.createUser}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><label>NeedyPeople Id:</label></td>
                                            <td><input type="text" placeholder="NeedyPeople Id" class="form-control" name="needyPersonId" id="needyPersonId" value={this.state.needyPersonId} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>NeedyPerson Name:</label></td>
                                            <td><input type="text" placeholder="NeedyPerson Name" class="form-control" name="needyPersonName" id="needyPersonName" value={this.state.needyPersonName} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>Phone:</label></td>
                                            <td><input type="text" placeholder="Phone Number" class="form-control" name="phone" id="phone" value={this.state.phone} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>familyIncome:</label></td>
                                            <td><input type="text" placeholder="familyIncome " class="form-control" name="familyIncome" id="familyIncome" value={this.state.familyIncome} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Address</h5></td>
                                        </tr>
                                        <tr>
                                            <td><label>AddressId:</label></td>
                                            <td><input placeholder="AddressId" name="addressId" class="form-control" id="adressId" value={this.state.addressId} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>City</label></td>
                                            <td><input type="text" placeholder="city" class="form-control" name="city" id="city" value={this.state.city} onChange={this.handleInputChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label>State:</label></td>
                                            <td><input type="text" placeholder="state" class="form-control" name="state" id="state" value={this.state.state} onChange={this.handleInputChange}></input></td>
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
                                </table>
                                <input type="submit" class="btn btn-success" value="submit"></input>

                            </form>
                            {
                                this.props.needyPeople !== undefined &&
                                alert("NeedyPeople Created Successfully with id")
                            }


                        </div>
                    </div>
                    
                    </center>
                </div>
                </div>

                  );
                  }
}

function mapStateToProps(state) {

    return {needyPeople: state.needyReducer.newNeedyPeople }
}

function mapDispatchToProps(dispatch) {
    return {
                        needyActions: bindActionCreators(needyActions, dispatch)

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NeedyPeopleSignUp);