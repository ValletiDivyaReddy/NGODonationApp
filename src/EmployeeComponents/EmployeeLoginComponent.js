import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import * as authActions from '../store/actions/LoginActions';



class EmployeeLoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employeeId: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.doEmployeeLogin = this.doEmployeeLogin.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    doEmployeeLogin(e) {
        e.preventDefault();
        const payload = {
            employeeId: this.state.employeeId,
            password: this.state.password
        }
        if (this.validate()) {
            this.props.authActions.doEmployeeLogin(payload);
        }

    }


    validate() {
        let employeeId = this.state.employeeId;
        let password = this.state.password;
        let errors = {};
        let isValid = true;

        if (!employeeId) {
            isValid = false;
            errors["employeeId"] = "Please enter your id.";
        }

        if (!password) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }
        this.setState({
            errors: errors
        });
        return isValid;
    }

    render() {
        const { isAuthUser, employee } = this.props;
        if (employee !== undefined) {
            if (isAuthUser) return <Redirect to="/employeelogin/employeeloginpage" />;
            else return <Redirect to='/' />;
        }

        return (
            <div className="emp1">
                {/* <div class="col-md-5 mx-auto"><center> */}
                <div class="col-md-5 mx-auto"><center>
                    {
                        (this.props.isAuthUser === false) && <div>Login Failed</div>
                    }
                    <div class="card">
                        <div class="card-header"><h1 className="text-danger">EMPLOYEE LOGIN</h1></div>
                        <div class="card-body" >


                            <div className="col-md-7 textbox">
                                <i className="fas fa-user"></i>
                                <input type="text" className="form-control " placeholder="id" name="employeeId" id="employeeId" value={this.state.employeeId} onChange={this.handleInputChange} />
                                <div className="text-danger">{this.state.errors.employeeId}</div>
                            </div>

                            <br />


                            <div className="col-md-7 textbox">
                                <i className="fas fa-lock"></i>
                                <input type="password" className="form-control" placeholder="password" name="password" id="password" value={this.state.password} onChange={this.handleInputChange} />
                                <div className="text-danger">{this.state.errors.password}</div>
                            </div>

                            <br />

                            <div className="col-md-7 d-grid gap-2">
                                {/* <button onClick={this.doLogin}>Login</button> */}
                                <button type="button" class="btn btn-outline-danger" onClick={this.doEmployeeLogin}>Login</button>
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
                    employee: state.LoginReducer.employee,
        isAuthUser: state.LoginReducer.isAuthUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
                    authActions: bindActionCreators(authActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLoginComponent)