import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as needyPeopleActions from '../store/actions/NeedyPeopleAction';
import { Button } from 'react-bootstrap';

class AddNeedyPeopleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            needyPersonId: '',
            needyPersonName: '',
            phone: '',
            familyIncome: '',
            needyPeoplePassword:'',
            address: {
                addressId: '',
                city: '',
                state: '',
                pincode: '',
                landmark: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addNeedyPeople = this.addNeedyPeople.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addNeedyPeople(e) {
        e.preventDefault();

        let payload = {
            needyPersonId: this.state.needyPersonId,
            needyPersonName: this.state.needyPersonName,
            phone: this.state.phone,
            familyIncome: this.state.familyIncome,
            needyPeoplePassword:this.state.needyPeoplePassword,
            addressId: this.state.addressId,
            city: this.state.city,
            state: this.state.state,
            pincode: this.state.pincode,
            landmark: this.state.landmark
        }

        const { needyPeopleActions } = this.props;
        needyPeopleActions.addNeedyPeople(payload);

    }

    clear = () => {
        this.setSate = ({
            needyPersonId: '',
            employeeName: '',
            email: '',
            phone: '',
            username: '',
            password:'',
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
            
            <div className="emp3">
                <center>
                <div class="container">s
                    <form onSubmit={this.addNeedyPeople}>
                        <br />
                        <h3>Add NeedyPeople</h3>
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
                                    <td><label>needyPeoplePassword:</label></td>
                                    <td><input type="password" placeholder="needyPeoplePassword " class="form-control" name="needyPeoplePassword" id="needyPeoplePassword" value={this.state.needyPeoplePassword} onChange={this.handleInputChange}></input></td>
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
                                    <td><input type="text" placeholder="city" name="city" class="form-control" id="city" value={this.state.city} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>State:</label></td>
                                    <td><input type="text" placeholder="state" name="state" class="form-control" id="state" value={this.state.state} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Pincode:</label></td>
                                    <td><input type="text" placeholder="pincode" name="pincode" class="form-control" id="pincode" value={this.state.pincode} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Landmark:</label></td>
                                    <td><input type="text" placeholder="landmark" name="landmark" class="form-control" id="landmark" value={this.state.landmark} onChange={this.handleInputChange}></input></td>
                                </tr>

                            </tbody>
                        </table><br></br>
                        <input type="submit" class="btn btn-success" value="submit"></input>
                      
                    </form>
                    
                </div>
                {
                    this.props.needyPeople !== undefined &&
                    alert("NeedyPeople Created Successfully with id")
                }
                </center>
            </div>);
    }
}

function mapStateToProps(state) {

    return { needyPeople: state.needyReducer.newNeedyPeople }
}

function mapDispatchToProps(dispatch) {
    return {
        needyPeopleActions: bindActionCreators(needyPeopleActions, dispatch)

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNeedyPeopleComponent);
