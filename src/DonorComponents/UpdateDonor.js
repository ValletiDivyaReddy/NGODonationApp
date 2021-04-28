import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import * as donorActions from '../store/actions/DonorAction';

class UpdateDonor extends Component {

    constructor(props) {
        super(props);

        this.donorId = React.createRef();
        this.donorName = React.createRef();
        this.donorEmail = React.createRef();
        this.donorPhone = React.createRef();
        this.donorUsername = React.createRef();
        this.donorPassword = React.createRef();
        this.addressId = React.createRef();
        this.city = React.createRef();
        this.state = React.createRef();
        this.pincode = React.createRef();
        this.landmark = React.createRef();

        this.updateDonor = this.updateDonor.bind(this);
    }

    componentDidMount() {
        const { donorActions, match } = this.props;
        donorActions.fetchDonorById(match.params.id);
    }

    updateDonor(e) {
        e.preventDefault();

        let payload = {
            donorId: this.donorId.current.value,
            donorName: this.donorName.current.value,
            donorEmail: this.donorEmail.current.value,
            donorPhone: this.donorPhone.current.value,
            donorUsername: this.donorUsername.current.value,
            donorPassword: this.donorPassword.current.value,
            addressId: this.addressId.current.value,
            city: this.city.current.value,
            state: this.state.current.value,
            pincode: this.pincode.current.value,
            landmark: this.landmark.current.value,
        }

        const { donorActions } = this.props;
        donorActions.updateDonor(payload);


    }

    render() {
        const { donor,update } = this.props;

        if(update !== undefined && update) {
            return <Redirect to='/donors/findalldonors'/>
        }
       
        return (
            <div>
                {
                    donor !== undefined ?
                    <div class="container"><br/>

                        <form onSubmit={this.updateDonor}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label>Donor Id:</label></td>
                                        <td><input defaultValue={donor.donorId} type="text" ref={this.donorId} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Donor Name:</label></td>
                                        <td><input defaultValue={donor.donorName} type="text"  class="form-control" ref={this.donorName} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Donor Email:</label></td>
                                        <td><input defaultValue={donor.donorEmail} type="text"  class="form-control" ref={this.donorEmail} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Donor Phone:</label></td>
                                        <td><input defaultValue={donor.donorPhone} type="text"  class="form-control" ref={this.donorPhone} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Donor Username:</label></td>
                                        <td><input defaultValue={donor.donorUsername} type="text"  class="form-control" ref={this.donorUsername} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Donor Password:</label></td>
                                        <td><input defaultValue={donor.donorPassword} type="text"  class="form-control" ref={this.donorPassword} /></td>
                                    </tr>
                                    <tr>
                                        <td><h5>Address</h5></td>
                                    </tr>
                                    <tr>
                                        <td><label>AddressId:</label></td>
                                        <td><input defaultValue={donor.address.addressId} type="text"  class="form-control" ref={this.addressId} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>City</label></td>
                                        <td><input defaultValue={donor.address.city} type="text"  class="form-control" ref={this.city} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>State:</label></td>
                                        <td><input defaultValue={donor.address.state} type="text"  class="form-control" ref={this.state} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Pincode:</label></td>
                                        <td><input defaultValue={donor.address.pincode} type="text"  class="form-control" ref={this.pincode} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>LandMark:</label></td>
                                        <td><input defaultValue={donor.address.landmark} type="text"  class="form-control" ref={this.landmark} /></td>
                                    </tr>

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
        donor: state.donorReducer.donor,
        update : state.donorReducer.update
     }
}

function mapDispatchToProps(dispatch) {
    return {
        donorActions: bindActionCreators(donorActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDonor);