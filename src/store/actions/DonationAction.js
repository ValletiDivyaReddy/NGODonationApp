import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8091';


export const fetchAllDonationsSuccess = (donations) => {

    return {
        type: 'FETCH_ALL_DONATIONS_SUCCESS',
        donations
    }
};

//Async Action
export const fetchAllDonations = () => {

    // Returns a dispatcher function
    // that dispatches an action at a later time
    return dispatch => {
        // Returns a promise
        return Axios.get(apiUrl + '/donors/donations/findalldonations')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllDonationsSuccess(resp.data))
            })
            .catch(error => {
                console.log(error);
                throw (error);
            });
    };
};

export const fetchDonationByIdSuccess = (donation) => {
    return {
        type: 'FETCH_DONATION_BY_ID_SUCCESS',
        payload: donation
    }
};

export const fetchDonationById = (donationId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/donors/donations/' + donationId)
            .then(resp => {
                // Handle data with sync action
                dispatch(fetchDonationByIdSuccess(resp.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const addDonationSuccess = (donation) => {
    return {
        type: 'ADD_DONATION_SUCCESS',
        payload: donation
    }
};

export const addDonation = (payload) => {
    let data = {
        donationId:  payload.donationId,
        donationAmount: payload.donationAmount,
        donationDate: payload.donationDate,
        donationType: payload.donationType,
        donorId: payload.donorId,
        itemId: payload.itemId
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/donors/donations/donatetoNGO", data)
            .then(response => {
                dispatch(addDonationSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};