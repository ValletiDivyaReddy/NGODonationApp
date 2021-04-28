import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8091';

export const fetchAdminLoginSuccess = (admin) => {

    return {
        type: 'FETCH_ADMIN_LOGIN_SUCCESS',
        payload:admin
    }
};
export const AdminloginFailure = () => {
    return {
        type: 'ADMIN_LOGIN_FAILURE'
    }
};

export const doAdminLogin = (payload) => {
    let data = {
        adminId: payload.adminId,
        adminPassword: payload.adminPassword,
    }
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.post(apiUrl + '/ngoemployees/adminlogin',data)
            .then(resp => {
                // Dispatch another action
                // to consume data        
                alert(resp.data)      
                dispatch(fetchAdminLoginSuccess(resp.data))
            })
            .catch(error => {
                dispatch(AdminloginFailure());
            });
    };
};

export const fetchEmployeeLoginSuccess = (employee) => {

    return {
        type: 'FETCH_EMPLOYEE_LOGIN_SUCCESS',
        payload:employee
    }
};
export const EmployeeloginFailure = () => {
    return {
        type: 'EMPLOYEE_LOGIN_FAILURE'
    }
};

export const doEmployeeLogin = (payload) => {
    let data = {
        employeeId: payload.employeeId,
        password: payload.password,
    }
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.post(apiUrl + '/needypeople/login',data)
            .then(resp => {
                // Dispatch another action
                // to consume data        
                alert(resp.data)      
                dispatch(fetchEmployeeLoginSuccess(resp.data))
            })
            .catch(error => {
                dispatch(EmployeeloginFailure());
            });
    };
};

export const fetchDonorLoginSuccess = (donor) => {

    return {
        type: 'FETCH_DONOR_LOGIN_SUCCESS',
        payload:donor
    }
};
export const DonorloginFailure = () => {
    return {
        type: 'DONOR_LOGIN_FAILURE'
    }
};

export const doDonorLogin = (payload) => {
    let data = {
        donorId: payload.donorId,
        donorPassword: payload.donorPassword,
    }
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.post(apiUrl + '/donors/login',data)
            .then(resp => {
                // Dispatch another action
                // to consume data        
                alert(resp.data)      
                dispatch(fetchDonorLoginSuccess(resp.data))
            })
            .catch(error => {
                dispatch(DonorloginFailure());
            });
    };
};

export const fetchNeedyLoginSuccess = (needy) => {

    return {
        type: 'FETCH_NEEDY_LOGIN_SUCCESS',
        payload:needy
    }
};
export const NeedyloginFailure = () => {
    return {
        type: 'NEEDY_LOGIN_FAILURE'
    }
};

export const doNeedyLogin = (payload) => {
    let data = {
        needyPersonId: payload.needyPersonId,
        needyPeoplePassword: payload.needyPeoplePassword,
    }
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.post(apiUrl + '/needy/login',data)
            .then(resp => {
                // Dispatch another action
                // to consume data        
                alert(resp.data)      
                dispatch(fetchNeedyLoginSuccess(resp.data))
            })
            .catch(error => {
                dispatch(NeedyloginFailure());
            });
    };
};