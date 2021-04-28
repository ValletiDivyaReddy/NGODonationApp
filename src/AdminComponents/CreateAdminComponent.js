import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as employeeActions from '../store/actions/EmployeeAction';
import { Button } from 'react-bootstrap';
 
class CreateAdminComponent extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            adminId: '',
            adminPassword: '',
            adminUsername: ''
    }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createAdmin = this.createAdmin.bind(this);
    }
 
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
 
    createAdmin(e) {
        e.preventDefault();
        
        let payload = {
            adminId: this.state.adminId,
            adminPassword: this.state.adminPassword,
            adminUsername: this.state.adminUsername
        }
        
        const { employeeActions } = this.props;
        employeeActions.createAdmin(payload);        
 
    }
 
    clear = () => {
        this.setSate = ({
            adminId: '',
            adminPassword: '',
            adminUsername: ''
              
    
        });
    }


    render() {
        return (
            <div className="admin3">
                <center>
                <h3>Add Admin</h3>
                <form onSubmit={this.createAdmin}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Admin Id:</label></td>
                                    <td><input type="text" class="form-control" placeholder="Admin Id" name="adminId" id="adminId" value={this.state.adminId} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <br/>
                                <tr>
                                    <td><label>Admin Username:</label></td>
                                    <td><input type="text" class="form-control" placeholder="Admin Name" name="adminUsername" id="adminUsername" value={this.state.adminUsername} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <br/>
                                <tr>
                                    <td><label>Admin Password:</label></td>
                                    <td><input type="password" class="form-control" placeholder="Admin Password" name="adminPassword" id="adminPassword" value={this.state.adminPassword} onChange={this.handleInputChange}></input></td>
                                </tr>
                            </tbody>
                        </table><br></br>
                        <input type="submit" class="btn btn-success"value="submit"></input>
                        
                </form>
                </center>
                  </div>
                   );
                  } 
}

function mapStateToProps(state) {

    return { admin: state.employeeReducer.newAdmin}
}

function mapDispatchToProps(dispatch) {
    return {
        employeeActions: bindActionCreators(employeeActions, dispatch)

    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateAdminComponent);
