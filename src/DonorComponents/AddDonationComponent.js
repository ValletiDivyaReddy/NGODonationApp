import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as donationActions from '../store/actions/DonationAction';
import { Button } from 'react-bootstrap';


class AddDonationComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            donationId: '',
            donationAmount: '',
            donationDate: '',
            donationType: '',
            donorId: '',
            itemId: ''



        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addDonation = this.addDonation.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addDonation(e) {
        e.preventDefault();

        let payload = {
            donationId: this.state.donationId,

            donationAmount: this.state.donationAmount,
            donationDate: this.state.donationDate,
            donationType: this.state.donationType,
            donorId: this.state.donorId,
            itemId: this.state.itemId


        }

        const { donationActions } = this.props;
        donationActions.addDonation(payload);

    }

    clear = () => {
        this.setSate = ({
            donationId: '',
            donationAmount: '',
            donationDate: '',
            donationType: '',
            donorId: '',
            itemId: ''
        });
    }


    render() {
        return (
            <div class="donor4">
                <div class="container">
                <br/>
                
                <center>
                    <h3>Add Donation</h3>
                    <form onSubmit={this.addDonation}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Donation Id:</label></td>
                                    <td><input type="number" placeholder="Donation Id" class="form-control" name="donationId" id="donationId" value={this.state.donationId} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Donation Amount:</label></td>
                                    <td><input type="number" placeholder="Donation Amount"  class="form-control"name="donationAmount" id="donationAmount" value={this.state.donationAmount} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Donation Date:</label></td>
                                    <td><input type="Date" placeholder="Donation Date"class="form-control" name="donationDate" id="donationDate" value={this.state.donationDate} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Donation Type:</label></td>
                                    <td><input type="text" placeholder="Donation Type"  class="form-control"name="donationType" id="donationType" value={this.state.donationType} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Donor Id:</label></td>
                                    <td><input type="number" placeholder="Donor Id" class="form-control" name="donorId" id="donorId" value={this.state.donorId} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Item Id:</label></td>
                                    <td><input type="number" placeholder="Item Id" class="form-control" name="itemId" id="itemId" value={this.state.itemId} onChange={this.handleInputChange}></input></td>
                                </tr>
                            </tbody>
                        </table><br></br>

                        <input type="submit" value="adddonation" className="btn btn-success"></input>

                    </form>
                    {
                        this.props.donation !== undefined &&
                        alert("Donation added Successfully with id" + this.props.donation.donationId)
                    }
                </center>
                </div>
            </div>);
    }
}

function mapStateToProps(state) {

    return { donation: state.donationReducer.donation }
}

function mapDispatchToProps(dispatch) {
    return {
        donationActions: bindActionCreators(donationActions, dispatch)

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDonationComponent);