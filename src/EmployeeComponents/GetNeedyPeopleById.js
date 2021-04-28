import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as needyPeopleActions from '../store/actions/NeedyPeopleAction';
// import * as employeeActions from '../store/actions/EmployeeAction';

class GetNeedyByIdComponent extends Component {

    componentDidMount() {
        const { needyPeopleActions, match } = this.props;
        needyPeopleActions.fetchNeedyById(match.params.id);
    }
    render() {
        const { needyPeople } = this.props;
        return (
            <div className="need">
                {
                    needyPeople !== undefined ?
                    <div class= "container"><br/>
                        <div>

                            <p>
                                <div><h4>Needy People</h4></div>
                                <div><p>NeedyPerson Id: {needyPeople.needyPersonId}</p></div>
                                <div><p>NeedyPerson Name: {needyPeople.needyPersonName} </p></div> 
                                <div><p>Phone: {needyPeople.phone} </p></div>
                                <div><p>Family Income: {needyPeople.familyIncome}</p></div>
                            </p>
                            <p>
                                <h4>Address:</h4>
                                <div><p>addressId: {needyPeople.address.addressId}</p></div>
                                <div><p>City: {needyPeople.address.city}</p></div>
                                <div><p>State: {needyPeople.address.state}</p></div>
                                <div><p>Pincode: {needyPeople.address.pincode}</p></div>
                                <div><p>LandMark: {needyPeople.address.landmark}</p></div>
                            </p>
                            </div>

                        </div>
                        : <h3>Loading....</h3>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {

    return { needyPeople: state.needyReducer.needyPeople }
}

function mapDispatchToProps(dispatch) {
    return {
        needyPeopleActions: bindActionCreators(needyPeopleActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetNeedyByIdComponent);