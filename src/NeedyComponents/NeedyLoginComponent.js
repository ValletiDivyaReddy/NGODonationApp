import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import * as authActions from '../store/actions/LoginActions';



class NeedyLoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            needyPersonId: '',
            needyPeoplePassword: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.doNeedyLogin = this.doNeedyLogin.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    doNeedyLogin(e) {
        e.preventDefault();
        const payload = {
            needyPersonId: this.state.needyPersonId,
            needyPeoplePassword: this.state.needyPeoplePassword
        }
        if (this.validate()) {
            this.props.authActions.doNeedyLogin(payload);
        }

    }


    validate() {
        let needyPersonId = this.state.needyPersonId;
        let needyPeoplePassword = this.state.needyPeoplePassword;
        let errors = {};
        let isValid = true;

        if (!needyPersonId) {
            isValid = false;
            errors["needyPersonId"] = "Please enter your id.";
        }

        if (!needyPeoplePassword) {
            isValid = false;
            errors["needyPeoplePassword"] = "Please enter your password.";
        }
        this.setState({
            errors: errors
        });
        return isValid;
    }

    render() {
        const { isAuthUser, needy } = this.props;
        if (needy !== undefined) {
            if (isAuthUser) return <Redirect to="/needylogin/needyloginpage" />;
            else return <Redirect to='/' />;
        }

        return (
            <div className="needy1">
                <div class="col-md-5 mx-auto"><center>
                    {
                        (this.props.isAuthUser === false) && <div>Login Failed</div>
                    }


                    <div class="card">
                        <div class="card-header"><h1 className="text-danger">NEEDYPEOPLE LOGIN</h1></div>
                        <div class="card-body" >
                            <div class="col-md-7 ">

                                <input type="text" className="form-control " placeholder="id" name="needyPersonId" id="needyPersonId" value={this.state.needyPersonId} onChange={this.handleInputChange} />
                                <div className="text-danger">{this.state.errors.needyPersonId}</div>
                            </div>

                            <br />


                            <div className="col-md-7 textbox">
                                <input type="password" className="form-control" placeholder="needyPeoplePassword" name="needyPeoplePassword" id="needyPeoplePassword" value={this.state.needyPeoplePassword} onChange={this.handleInputChange} />
                                <div className="text-danger">{this.state.errors.needyPeoplePassword}</div>
                            </div>

                            <br />

                            <div className="col-md-7 d-grid gap-2">
                                {/* <button onClick={this.doLogin}>Login</button> */}
                                <button type="button" class="btn btn-outline-danger" onClick={this.doNeedyLogin}>Login</button>
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
        needy: state.LoginReducer.needy,
        isAuthUser: state.LoginReducer.isAuthUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NeedyLoginComponent)