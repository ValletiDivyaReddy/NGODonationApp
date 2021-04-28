import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as donationActions from '../store/actions/DonationAction';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
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


class GetAllDonationsComponent extends Component {

    componentDidMount() {
        this.props.donationActions.fetchAllDonations();
    }
    render() {
        return (
            <div class="donations">

                {
                    this.props.donations !== undefined ?
                        <TableContainer>
                            <center><h3>Donation Details</h3></center>
                            <Table border="1" bgcolor="white" class="table  table-bordered table-hover" >

                                <TableHead class="thead-dark">
                                    <TableRow>
                                        <StyledTableCell>DonationId</StyledTableCell>
                                        <StyledTableCell>DonationAmount</StyledTableCell>
                                        <StyledTableCell>DonationDate</StyledTableCell>
                                        <StyledTableCell>DonationType</StyledTableCell>
                                        <StyledTableCell>DonorID</StyledTableCell>
                                        <StyledTableCell>ItemId</StyledTableCell>
                                        <StyledTableCell>View</StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.props.donations.map((donation, index) =>

                                            <StyledTableRow>
                                                <td>{donation.donationId}</td>
                                                <td>{donation.donationAmount }</td>
                                                <td>{donation.donationDate}</td>
                                                <td>{donation.donationType}</td>
                                                <td>{donation.donorId}</td>
                                                <td>{donation.itemId}</td>

                                                <td><Link to={`/donors/donations/${donation.donationId}`}>View</Link></td>

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

    return { donations: state.donationReducer.donations }
}

function mapDispatchToProps(dispatch) {
    return { donationActions: bindActionCreators(donationActions, dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllDonationsComponent);