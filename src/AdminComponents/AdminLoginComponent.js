import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import * as authActions from '../store/actions/LoginActions';



class AdminLoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adminId: '',
            adminPassword: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.doAdminLogin = this.doAdminLogin.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    doAdminLogin(e) {
        e.preventDefault();
        const payload = {
            adminId: this.state.adminId,
            adminPassword: this.state.adminPassword
        }
        if (this.validate()) {
            this.props.authActions.doAdminLogin(payload);
        }

    }


    validate() {
        let adminId = this.state.adminId;
        let adminPassword = this.state.adminPassword;
        let errors = {};
        let isValid = true;

        if (!adminId) {
            isValid = false;
            errors["adminId"] = "Please enter your id.";
        }

        if (!adminPassword) {
            isValid = false;
            errors["adminPassword"] = "Please enter your password.";
        }
        this.setState({
            errors: errors
        });
        return isValid;
    }


    render() {
        const { isAuthUser, admin } = this.props;

        if (admin !== undefined) {
            if (isAuthUser) return <Redirect to="/adminlogin/adminloginpage" />;
            else return <Redirect to='/' />;
        }
        return (
            <div class='admin'>
                <div class="col-md-5 mx-auto"><center>
                    {
                        (this.props.isAuthUser === false) && <div>Login Failed</div>
                    }
          
                
                    <div class="card">
                        <div class="card-header"><h1 className="text-danger">ADMIN LOGIN</h1></div>
                        <div class="card-body" >


                            <div class="col-md-7 ">

                                <input type="text" className="form-control " placeholder="id" name="adminId" id="adminId" value={this.state.adminId} onChange={this.handleInputChange} />
                                <div className="text-danger">{this.state.errors.adminId}</div>
                            </div>

                            <br />


                            <div class="col-md-7 ">

                                <input type="password" className="form-control" placeholder="adminPassword" name="adminPassword" id="adminPassword" value={this.state.adminPassword} onChange={this.handleInputChange} />
                                <div className="text-danger">{this.state.errors.adminPassword}</div>
                            </div>

                            <br />

                            <div class="col-md-7 d-grid gap-2">
                                {/* <button onClick={this.doLogin}>Login</button> */}
                                <button type="button" class="btn btn-outline-danger" onClick={this.doAdminLogin}>Login</button>
                                {/* <Button variant="contained" color="primary" onClick={this.doLogin}>Login</Button> */}
                            </div>
                        </div>
                    </div>
                </center>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        admin: state.LoginReducer.admin,
        isAuthUser: state.LoginReducer.isAuthUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLoginComponent)