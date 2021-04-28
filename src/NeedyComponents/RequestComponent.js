import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as npActions from '../store/actions/NpActions';

 
class RequestComponent extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            needyPersonId: '',
            needyPersonName: '',
            phone: ''
            
    }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createNeedyPerson = this.createNeedyPerson.bind(this);
    }
 
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        
    }
 
    createNeedyPerson(e) {
        e.preventDefault();
        
        let payload = {
            needyPersonId: this.state.needyPersonId,
            needyPersonName: this.state.needyPersonName,
            phone: this.state.phone
        }
        
        const { npActions } = this.props;
        npActions.createNeedyPerson(payload);        
 
    }
 
    clear = () => {
        this.setSate = ({
            needyPersonId: '',
            needyPersonName: '',
            phone: ''
        });
    }




    render() {
        return (
            <div class="needy3">
                <center>
                <br/>
                <h3>Request For Help</h3>
                <form onSubmit={this.createNeedyPerson}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Needy Person Id:</label></td>
                                    <td><input type="text" placeholder="Needy Person Id"  class="form-control"name="needyPersonId" id="needyPersonId" value={this.state.needyPersonId} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Needy Person Name:</label></td>
                                    <td><input type="text" placeholder="Needy Person Name" class="form-control" name="needyPersonName" id="needyPersonName" value={this.state.needyPersonName} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Phone:</label></td>
                                    <td><input type="text" placeholder="Phone Number" class="form-control" name="phone" id="phone" value={this.state.phone} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <label>ITEM:</label><td><select value={this.state.select} class="form-control" name="select" onChange={this.handleInputChange}>
                                        <option value="Money">Money</option>
                                        <option value="Books">Books</option>
                                        <option value="Clothes">Clothes</option>
                                        <option value="Edible">Edible</option>
                                        <option value="Others">Others</option>

                                    </select></td>

                                </tr>
                            </tbody>
                        </table><br></br>
                        <button className="btn btn-success" onClick={this.saveUser} >Submit</button>
                       


                </form>
                {
                this.props.needyPerson !== undefined &&
                alert("NeedyPerson Created Successfully with id")
                 }
                 </center>
                 
    
                 
                 
                 
                  </div> );
                  } 
}

function mapStateToProps(state) {

    return { needyPerson: state.npReducer.newNeedyPerson }
}

function mapDispatchToProps(dispatch) {
    return {
        npActions: bindActionCreators(npActions, dispatch)

    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(RequestComponent);