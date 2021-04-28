import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as donationActions from '../store/actions/DonationAction';


class GetDonationByIdComponent extends Component {

    componentDidMount() {

        const { donationActions, match } = this.props;
        donationActions.fetchDonationById(match.params.id);

    }
    render() {
        const { donation } = this.props;
        return (
            <div className="donations2">

                {
                    donation !== undefined ?
                        <div>
                            <div class="container"><br/>
                            <p>
                                <div><h4>Donations</h4></div>
                                <div><p>DonationId: {donation.donationId}</p></div>
                                <div><p>DonationDate: {donation.donationDate}</p></div>
                                <div><p>DonationType: {donation.donationType}</p></div>
                                <div><p>DonorId: {donation.donorId}</p></div>
                                <div><p>ItemId: {donation.itemId}</p></div>
                            </p>

                            
                            </div>

                        </div>
                        :
                        <h3>Loading....</h3>
                }
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(GetDonationByIdComponent);