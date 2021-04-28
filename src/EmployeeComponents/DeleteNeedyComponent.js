
import React from 'react';
import * as needyPeopleActions from '../store/actions/NeedyPeopleAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

class DeleteNeedyComponent extends React.Component {
    
    componentDidMount() {
        const { needyPeopleActions, match } = this.props;
        needyPeopleActions.deleteNeedyPeople(match.params.id);
        alert("Needy People is Deleted");
    }
    render() {
        return (
            <div>
                <Redirect to={`/needypeople/all`}/>
            </div>
        );
    }
}
 
function mapStateToProps(state) {
 
    return { deleted: state.needyReducer.deleted }
}
 
function mapDispatchToProps(dispatch) {
    return {
        needyPeopleActions: bindActionCreators(needyPeopleActions, dispatch)
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps) (DeleteNeedyComponent);