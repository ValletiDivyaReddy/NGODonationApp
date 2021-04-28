import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as needyPeopleActions from '../store/actions/NeedyPeopleAction';
import {useAlert} from 'react-alert';
import { Button } from 'react-bootstrap';
 
class HelpNeedyComponent extends Component {

    
 
    constructor(props) {
        super(props);
        this.state = {
            distributionId:'',
            amountDistributed:'',
            dateOfDistribution:'',
            approvalOrRejectedDate:'',
            status:'',
            person:{
                needyPersonId: ''
            },
            distributedBy:{
                employeeId: ''
            },
            item:{
                itemId:''
            }
    }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.helpNeedyPeople = this.helpNeedyPeople.bind(this);
    }
 
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
 
    helpNeedyPeople(e) {
        e.preventDefault();
        
        let payload = {
            distributionId: this.state.distributionId,
            amountDistributed: this.state.amountDistributed,
            dateOfDistribution: this.state.dateOfDistribution,
            approvalOrRejectedDate:this.state.approvalOrRejectedDate,
            status: this.state.status,
            needyPersonId: this.state.needyPersonId,          
            employeeId: this.state.employeeId,
            itemId: this.state.itemId
        }
        
        const { needyPeopleActions } = this.props;
        needyPeopleActions.helpNeedyPeople(payload);        
 
    }
 
    clear = () => {
        this.setSate = ({
            distributionId:'',
            amountDistributed:'',
            dateOfDistribution:'',
            approvalOrRejectedDate:'',
            status:'',
            person:{
                needyPersonId: ''
            },
            distributedBy:{
                employeeId: ''
            },
            item:{
                itemId:''
            }
    });
    }


    render() {
        // const App = () => {
        //     const alert = useAlert()
        return (
            <div class="container">
                <br/>
                <h3>Donation Details</h3>
                
                <form onSubmit={this.helpNeedyPeople}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Distribution Id:</label></td>
                                    <td><input type="text" placeholder="Distribution Id" class="form-control" name="distributionId" id="distributionId" value={this.state.distributionId} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Amount Distributed:</label></td>
                                    <td><input type="text" placeholder="Amount Distributed" class="form-control" name="amountDistributed" id="amountDistributed" value={this.state.needyPersonName} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Date Of Distribution:</label></td>
                                    <td><input type="date" placeholder="Date Of Distribution" class="form-control" name="dateOfDistribution" id="dateOfDistribution" value={this.state.dateOfDistribution} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                <td><label>Approval Or RejectedDate:</label></td>
                                    <td><input type="date" placeholder="Approval Or RejectedDate " class="form-control" name="approvalOrRejectedDate" id="approvalOrRejectedDate" value={this.state.approvalOrRejectedDate} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Status:</label></td>
                                    <td><input placeholder="Status" name="status" id="status" class="form-control" value={this.state.status} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>NeedyPerson Id</label></td>
                                    <td><input type="text" placeholder="NeedyPerson Id" class="form-control" name="needyPersonId" id="needyPersonId" value={this.state.needyPersonId} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Employee Id:</label></td>
                                    <td><input type="text" placeholder="Employee Id" class="form-control" name="employeeId" id="employeeId" value={this.state.employeeId} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>ItemId:</label></td>
                                    <td><input type="text" placeholder="ItemId" class="form-control"  name="itemId" id="itemId" value={this.state.itemId} onChange={this.handleInputChange}></input></td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="submit" class="btn btn-success" value="Distribute" onclick={()=>{alert.show("Donation Distributed")}}>Distribute</button>
                </form>
                {
                this.props.needyPeople !== undefined &&
                alert("donation has been distributed to the needy person")
                 }
                  </div> );
                  } 
                }


function mapStateToProps(state) {

    return { needyPeople: state.needyReducer.newDistribution }
}

function mapDispatchToProps(dispatch) {
    return {
        needyPeopleActions: bindActionCreators(needyPeopleActions, dispatch)

    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(HelpNeedyComponent);