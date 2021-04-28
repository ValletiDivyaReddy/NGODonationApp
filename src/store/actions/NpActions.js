import Axios from 'axios';
 
// API URL
const apiUrl = 'http://localhost:8091';
 
// Sync Action
export const fetchAllRequestsSuccess = (needyPeople) => {
 
    return {
        type: 'FETCH_ALL_REQUESTS_SUCCESS',
        needyPeople
    }
};
 
//Async Action
export const fetchAllRequests = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/needy/findallrequests')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllRequestsSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const createNeedyPersonSuccess = (needyPerson) => {
    return {
        type: 'CREATE_REQUEST_SUCCESS',
        payload: needyPerson
    }
};
 
export const createNeedyPerson = (payload) => {
    let data = {
        needyPersonId: payload.needyPersonId,
        needyPersonName: payload.needyPersonName,
        phone: payload.phone
    
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/needy/needyrequest", data)
            .then(response => {
                dispatch(createNeedyPersonSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
        };
    };



    export const createUserSuccess = (user) => {
        return {
            type: 'CREATE_NEEDYPEOPLE_SUCCESS',
            payload: user
        }
    };
     
    export const createUser = (payload) => {
        let data = {
            

            needyPersonId: payload.needyPersonId,
            needyPersonName: payload.needyPersonName,
            phone:payload.phone,
            familyIncome:payload.familyIncome,
            needyPeoplePassword:payload.needyPeoplePassword,
            address: {
            addressId: payload.addressId,
            city:payload.city,
            state:payload.state,
            pincode:payload.pincode,
            landmark:payload.landmark,
    
        }
    }
        return (dispatch) => {
            return Axios.post(apiUrl + "/needy/addneedypeople", data)
                .then(response => {
                    dispatch(createUserSuccess(response.data))
                })
                .catch(error => {
                    throw (error);
                });
        };
    
    };