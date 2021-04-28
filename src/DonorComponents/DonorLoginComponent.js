import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import * as authActions from '../store/actions/LoginActions';



class DonorLoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            donorId: '',
            donorPassword: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.doDonorLogin = this.doDonorLogin.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    doDonorLogin(e) {
        e.preventDefault();
        const payload = {
            donorId: this.state.donorId,
            donorPassword: this.state.donorPassword
        }
        if (this.validate()) {
            this.props.authActions.doDonorLogin(payload);
        }

    }

    validate() {
        let donorId = this.state.donorId;
        let donorPassword = this.state.donorPassword;
        let errors = {};
        let isValid = true;

        if (!donorId) {
            isValid = false;
            errors["donorId"] = "Please enter your id.";
        }

        if (!donorPassword) {
            isValid = false;
            errors["donorPassword"] = "Please enter your password.";
        }
        this.setState({
            errors: errors
        });
        return isValid;
    }

    render() {
        const { isAuthUser, donor } = this.props;

        if (donor !== undefined) {
            if (isAuthUser) return <Redirect to="/donorlogin/donorloginpage" />;
            else return <Redirect to='/' />;
        }
        return (
            <div className="donor">
                <div className="imagecontainer">

                <div class="col-md-5 mx-auto"><center>
                        {
                            (this.props.isAuthUser === false) && <div>Login Failed</div>
                        }

                        <div class="card">
                            <div class="card-header"><h1 className="text-danger"> DONOR LOGIN</h1></div>
                            <div class="card-body" >
                           


                                <div className="col-md-8">
                                        <input type="text" className="form-control " placeholder="donorId" name="donorId" id="donorId" value={this.state.donorId} onChange={this.handleInputChange} />
                                        <div className="text-danger">{this.state.errors.donorId}</div>
                                    </div><br></br>




                                    <div className="col-md-8 ">
                                        <input type="password" className="form-control" placeholder="donorPassword" name="donorPassword" id="donorPassword" value={this.state.donorPassword} onChange={this.handleInputChange} />
                                        <div className="text-danger">{this.state.errors.donorPassword}</div>
                                    </div><br></br>



                                    <div className="col-md-7 d-grid gap-2">
                                        {/* <button onClick={this.doLogin}>Login</button> */}
                                        <button type="button" class="btn btn-outline-danger" onClick={this.doDonorLogin}>Login</button>
                                        {/* <Button variant="contained" color="primary" onClick={this.doLogin}>Login</Button> */}
                                    </div>
                                </div>

                            </div>
                        


                    </center>


                    </div>
                </div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
                    donor: state.LoginReducer.donor,
        isAuthUser: state.LoginReducer.isAuthUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
                    authActions: bindActionCreators(authActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorLoginComponent)