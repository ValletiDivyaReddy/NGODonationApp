import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as npActions from '../store/actions/NpActions';
import { Link } from 'react-router-dom';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
 
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 16,
    },
}))(TableCell);
 
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
 
class GetAllRequestsComponent extends Component {
 
    componentDidMount() {
 
        this.props.npActions.fetchAllRequests();
 
    }
    render() {
        return (
            <div className="emp5">
                {
                    this.props.needyPeople !== undefined ?
                        <TableContainer>
                            <Table border="1" bgcolor="white" class = "table  table-bordered table-hover">
                                <TableHead class="thead-dark">
                                    <TableRow>
                                        <StyledTableCell>needyPersonId</StyledTableCell>
                                        <StyledTableCell>needyPersonName</StyledTableCell>
                                        <StyledTableCell>phone</StyledTableCell>
                                        <StyledTableCell>Help</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.props.needyPeople.map((person, index) =>
 
                                            <StyledTableRow>
                                                <td>{person.needyPersonId}</td>
                                                <td>{person.needyPersonName}</td>
                                                <td>{person.phone}</td>
                                                <td><Link to={`/needypeoplehelp/${person.needyPersonId}`}>Help</Link></td>
                                            </StyledTableRow>)
                                    }
                                </TableBody>
 
                            </Table>
                        </TableContainer>
                        :
                        <h3>Loading....</h3>
                }
            </div>
        );
    }
}
 
function mapStateToProps(state) {
    return {needyPeople:state.npReducer.needyPeople}
 
    // return { needyPeople: state.needyPeopleReducer.needyPeople }
}
 
function mapDispatchToProps(dispatch) {
    return {
        npActions: bindActionCreators(npActions, dispatch)
 
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(GetAllRequestsComponent);