import Axios from 'axios';
 
// API URL
const apiUrl = 'http://localhost:8091';
 
// Sync Action
export const fetchAllNeedyPeopleSuccess = (needyPeoples) => {
 
    return {
        type: 'FETCH_ALL_NEEDYPEOPLE_SUCCESS',
        needyPeoples
    }
};
 
//Async Action
export const fetchAllNeedyPeople = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/needypeople/findallneedypeople')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllNeedyPeopleSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchNeedyByIdSuccess = (needyPeople) => {
    return {
        type: 'FETCH_NEEDYPEOPLE_BY_ID_SUCCESS',
        payload: needyPeople
    }
};
 
export const fetchNeedyById = (needyPersonId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/needypeople/findneedypeople/' + needyPersonId)
            .then(resp => {
                // Handle data with sync action
                dispatch(fetchNeedyByIdSuccess(resp.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};
 
export const addNeedyPeopleSuccess = (newNeedyPeople) => {
    return {
        type: 'ADD_NEEDYPEOPLE_SUCCESS',
        payload: newNeedyPeople
    }
};
 
export const addNeedyPeople = (payload) => {
    let data = {
        needyPersonId: payload.needyPersonId,
        needyPersonName: payload.needyPersonName,
        phone: payload.phone,
        familyIncome:payload.familyIncome,
        needyPeoplePassword:payload.needyPeoplePassword,
        address : {
            addressId: payload.addressId,
            city: payload.city,
            state: payload.state,
            pincode: payload.pincode,
            landmark:payload.landmark
        }
    
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/needypeople/addneedypeople", data)
            .then(response => {
                dispatch(addNeedyPeopleSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const helpNeedyPeopleSuccess = (newDistribution) => {
    return {
        type: 'HELP_NEEDYPEOPLE_SUCCESS',
        payload: newDistribution
    }
};
 
export const helpNeedyPeople = (payload) => {
    let data = {
        distributionId: payload.distributionId,
        amountDistributed: payload.amountDistributed,
        dateOfDistribution:payload.dateOfDistribution,
        approvalOrRejectedDate:payload.approvalOrRejectedDate,
        status:payload.status,
        person:{
            needyPersonId: payload.needyPersonId
        },
        distributedBy:{
            employeeId: payload.employeeId
        },
        item:{
            itemId: payload.itemId
        }
    
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/needypeople/helpneedypeople", data)
            .then(response => {
                dispatch(helpNeedyPeopleSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const deleteNeedyPeopleSuccess = (deleted) => {
    return {
        type: 'DELETE_NEEDYPEOPLE_SUCCESS',
        deleted
    }
};

export const deleteNeedyPeople = (needyPersonId) => {
    return (dispatch) => {
        return Axios.delete(apiUrl + '/needypeople/removeneedypeople/'+needyPersonId)
            .then(resp => {            
                dispatch(deleteNeedyPeopleSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};