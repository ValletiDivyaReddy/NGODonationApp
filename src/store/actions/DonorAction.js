import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8091';

// Sync Action
export const fetchAllDonorsSuccess = (donors) => {

    return {
        type: 'FETCH_ALL_DONORS_SUCCESS',
        donors
    }
};

//Async Action
export const fetchAllDonors = () => {

    // Returns a dispatcher function
    // that dispatches an action at a later time
    return dispatch => {
        // Returns a promise
        return Axios.get(apiUrl + '/donors/findalldonors')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllDonorsSuccess(resp.data))
            })
            .catch(error => {
                console.log(error);
                throw (error);
            });
    };
};

export const fetchDonorByIdSuccess = (donor) => {
    return {
        type: 'FETCH_DONOR_BY_ID_SUCCESS',
        payload: donor
    }
};

export const fetchDonorById = (donorId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/donors/' + donorId)
            .then(resp => {
                // Handle data with sync action
                dispatch(fetchDonorByIdSuccess(resp.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const addDonorSuccess = (donor) => {
    return {
        type: 'ADD_DONOR_SUCCESS',
        payload: donor
    }
};

export const addDonor = (payload) => {
    let data = {
        donorId: payload.donorId,
        donorName: payload.donorName,
        donorEmail: payload.donorEmail,
        donorPhone: payload.donorPhone,
        donorUsername: payload.donorUsername,
        donorPassword: payload.donorPassword,


        address: {
            addressId: payload.addressId,
            city: payload.city,
            state: payload.state,
            pincode: payload.pincode,

            landmark: payload.landmark,

        }

    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/donors/adddonor", data)
            .then(response => {
                dispatch(addDonorSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const updateDonorSuccess = (update) => {
    return {
        type: 'UPDATE_DONOR_SUCCESS',
        update
    }
};

export const updateDonor = (payload) => {
    let data = {
        donorId: payload.donorId,
        donorName: payload.donorName,
        donorEmail: payload.donorEmail,
        donorPhone: payload.donorPhone,
        donorUsername:payload.donorUsername,
        donorPassword:payload.donorPassword,
        address : {
            addressId: payload.addressId,
            city: payload.city,
            state: payload.state,
            pincode: payload.pincode,
            landmark:payload.landmark
        }
    
    }
    return (dispatch) => {
        return Axios.put(apiUrl +"/donors/modifydonor/"+payload.donorId,data)
            .then(resp => {            
                dispatch(updateDonorSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const createUserSuccess = (user) => {
    return {
        type: 'CREATE_DONOR_SUCCESS',
        payload: user
    }
};
 
export const createUser = (payload) => {
    let data = {
        
        donorId: payload.donorId,
        donorName: payload.donorName,
        donorEmail: payload.donorEmail,
        donorPhone: payload.donorPhone,
        donorUsername: payload.donorUsername,
        donorPassword: payload.donorPassword,


        address: {
            addressId: payload.addressId,
            city: payload.city,
            state: payload.state,
            pincode: payload.pincode,
            landmark: payload.landmark,
    }
}
    return (dispatch) => {
        return Axios.post(apiUrl + "/donors/adddonor", data)
            .then(response => {
                dispatch(createUserSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };

};