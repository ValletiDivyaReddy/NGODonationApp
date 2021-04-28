const initialState = {
    employees: [],
    employee: undefined,
    newEmployee: undefined,
    newAdmin: undefined,
    deleted:'',
    update:''
}
 
export default function EmployeeReducer(state = initialState, action) {
 
    switch (action.type) {
 
        case 'FETCH_ALL_EMPLOYEES_SUCCESS':
            return {
                ...state,
               employees : action.employees
            };
        case 'FETCH_EMPLOYEE_BY_ID_SUCCESS':
                return {
                    ...state,
                    employee: action.payload
                };
     
        case 'CREATE_EMPLOYEE_SUCCESS':
                return {
                    ...state,
                    newEmployee: action.payload
                };

        case 'DELETE_EMPLOYEE_SUCCESS':
                return {
                    ...state,
                    deleted: action.deleted
                    };
        
        case 'CREATE_ADMIN_SUCCESS':
            return {
                 ...state,
                 newAdmin: action.payload
                };
        case 'UPDATE_EMPLOYEE_SUCCESS':
            return {
                ...state,
                update: action.payload
            };

        
        default:
            return state;
 
    }
}