import React from 'react';
import * as employeeActions from '../store/actions/EmployeeAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

class DeleteEmployeeComponent extends React.Component {
    
    componentDidMount() {
        const { employeeActions, match } = this.props;
        employeeActions.deleteEmployee(match.params.id);
        alert("Employee is Deleted");
    }
    render() {
        return (
            <div>
                <Redirect to={`/employee/all`}/>
            </div>
        );
    }
}
 
function mapStateToProps(state) {
 
    return { deleted: state.employeeReducer.deleted }
}
 
function mapDispatchToProps(dispatch) {
    return {
        employeeActions: bindActionCreators(employeeActions, dispatch)
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps) (DeleteEmployeeComponent);