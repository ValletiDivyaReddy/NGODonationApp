import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as donorActions from '../store/actions/DonorAction';
 
 
class GetDonorByIdComponent extends Component {
 
    componentDidMount() {
        
        const { donorActions, match } = this.props;
        donorActions.fetchDonorById(match.params.id);
        
    }
    render() {
        const { donor } = this.props;
        return (
            <div>
               
                {
                    donor !== undefined?
                    <div>
                        <div class="container"><br/>
                        <p>
 
                                            <div><h4>Donor</h4></div>
                                            <div><p>{donor.donorId}</p></div>
                                            <div><p>{donor.donorName}</p></div>
                                            <div><p>{donor.donorEmail}</p></div>
                                            <div><p>{donor.donorPhone}</p></div>
                                            <div><p>{donor.donorUsername}</p></div>
                                            <div><p>{donor.donorPassword}</p></div>
                                           
                                            <div><p>{donor.address.addressId}</p></div>
                                            <div><p>{donor.address.city}</p></div>
                                            <div><p>{donor.address.state}</p></div>
                                            <div><p>{donor.address.pincode}</p></div>
                                            <div><p>{donor.address.landmark}</p></div>
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
 
    return { donor: state.donorReducer.donor }
}
 
function mapDispatchToProps(dispatch) {
    return {
        donorActions: bindActionCreators(donorActions, dispatch)
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps) (GetDonorByIdComponent);