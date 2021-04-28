import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as needyPeopleActions from '../store/actions/NeedyPeopleAction';
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

class GetAllNeedyComponent extends Component {

    componentDidMount() {

        this.props.needyPeopleActions.fetchAllNeedyPeople();

    }
    render() {
        return (
            <div className="emp4">
                {
                    this.props.needyPeoples !== undefined ?
                        <TableContainer>
                           <center> <h2>NeedyPeople Details</h2></center>
                            <Table border="1" bgcolor="white" class = "table  table-bordered table-hover">
                                
                                <TableHead class="thead-dark">
                                    <TableRow>
                                        <StyledTableCell>needyPersonId</StyledTableCell>
                                        <StyledTableCell>needyPersonName</StyledTableCell>
                                        <StyledTableCell>phone</StyledTableCell>
                                        <StyledTableCell>familyIncome</StyledTableCell>
                                        <StyledTableCell>addressId</StyledTableCell>
                                        <StyledTableCell>city</StyledTableCell>
                                        <StyledTableCell>state</StyledTableCell>
                                        <StyledTableCell>pincode</StyledTableCell>
                                        <StyledTableCell>landmark</StyledTableCell>
                                        <StyledTableCell>View</StyledTableCell>
                                        <StyledTableCell>Delete</StyledTableCell>
                                    
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.props.needyPeoples.map((needyPeople, index) =>

                                            <StyledTableRow>
                                                <td>{needyPeople.needyPersonId}</td>
                                                <td>{needyPeople.needyPersonName}</td>
                                                <td>{needyPeople.phone}</td>
                                                <td>{needyPeople.familyIncome}</td>
                                                <td>{needyPeople.address.addressId}</td>
                                                <td>{needyPeople.address.city}</td>
                                                <td>{needyPeople.address.state}</td>
                                                <td>{needyPeople.address.pincode}</td>
                                                <td>{needyPeople.address.landmark}</td>
                                                <td><Link to={`/needypeople/${needyPeople.needyPersonId}`}>View</Link></td>
                                                <td><Link to={`/needypeopleDelete/${needyPeople.needyPersonId}`}>Delete</Link></td>
                                               
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

    return { needyPeoples: state.needyReducer.needyPeoples }
}

function mapDispatchToProps(dispatch) {
    return {
        needyPeopleActions: bindActionCreators(needyPeopleActions, dispatch)

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllNeedyComponent);