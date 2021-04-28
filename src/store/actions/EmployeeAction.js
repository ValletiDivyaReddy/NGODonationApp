import Axios from 'axios';
 
// API URL
const apiUrl = 'http://localhost:8091';
 
// Sync Action
export const fetchAllEmployeesSuccess = (employees) => {
 
    return {
        type: 'FETCH_ALL_EMPLOYEES_SUCCESS',
        employees
    }
};
 
//Async Action
export const fetchAllEmployees = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/ngoemployees/findallemployees')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllEmployeesSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchEmployeeByIdSuccess = (employee) => {
    return {
        type: 'FETCH_EMPLOYEE_BY_ID_SUCCESS',
        payload: employee
    }
};
 
export const fetchEmployeeById = (employeeId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/ngoemployees/findemployee/' + employeeId)
            .then(resp => {
                // Handle data with sync action
                dispatch(fetchEmployeeByIdSuccess(resp.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};
 
export const createEmployeeSuccess = (newEmployee) => {
    return {
        type: 'CREATE_EMPLOYEE_SUCCESS',
        payload: newEmployee
    }
};
 
export const createEmployee = (payload) => {
    let data = {
        employeeId: payload.employeeId,
        employeeName: payload.employeeName,
        email: payload.email,
        phone: payload.phone,
        username:payload.username,
        address : {
            addressId: payload.addressId,
            city: payload.city,
            state: payload.state,
            pincode: payload.pincode,
            landmark:payload.landmark
        }
    
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/ngoemployees/addemployee", data)
            .then(response => {
                dispatch(createEmployeeSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const deleteEmployeeSuccess = (deleted) => {
    return {
        type: 'DELETE_EMPLOYEE_SUCCESS',
        deleted
    }
};

export const deleteEmployee = (employeeId) => {
    return (dispatch) => {
        return Axios.delete(apiUrl + '/ngoemployees/removeemployee/'+employeeId)
            .then(resp => {            
                dispatch(deleteEmployeeSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const createAdminSuccess = (newAdmin) => {
    return {
        type: 'CREATE_ADMIN_SUCCESS',
        payload: newAdmin
    }
};
 
export const createAdmin = (payload) => {
    let data = {
        adminId: payload.adminId,
        adminPassword: payload.adminPassword,
        adminUsername:payload.adminUsername
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/ngoemployees/addadmin", data)
            .then(response => {
                dispatch(createAdminSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const updateEmployeeSuccess = (update) => {
    return {
        type: 'UPDATE_EMPLOYEE_SUCCESS',
        update
    }
};

export const updateEmployee = (payload) => {
    let data = {
        employeeId: payload.employeeId,
        employeeName: payload.employeeName,
        email: payload.email,
        phone: payload.phone,
        username:payload.username,
        address : {
            addressId: payload.addressId,
            city: payload.city,
            state: payload.state,
            pincode: payload.pincode,
            landmark:payload.landmark
        }
    
    }
    return (dispatch) => {
        return Axios.put(apiUrl + "/ngoemployees/modifyemployee/",data)
            .then(resp => {            
                dispatch(updateEmployeeSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

