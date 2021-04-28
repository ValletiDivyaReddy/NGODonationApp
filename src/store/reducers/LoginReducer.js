const initialState = {
    admin: undefined,
    employee: undefined,
    donor: undefined,
    needy: undefined,
    isAuthUser: undefined
}

export default function LoginReducer(state = initialState, action) {

    switch (action.type) {
        case 'FETCH_ADMIN_LOGIN_SUCCESS':
            return {
                ...state,
                admin: action.payload,
                isAuthUser: true
            }
        case 'ADMIN_LOGIN_FAILURE':
            return {
                ...state,
                isAuthUser: false
            };
        case 'FETCH_DONOR_LOGIN_SUCCESS':
            return {
                ...state,
                donor: action.payload,
                isAuthUser: true
            }
        case 'DONOR_LOGIN_FAILURE':
            return {
                ...state,
                isAuthUser: false
            };
        case 'FETCH_EMPLOYEE_LOGIN_SUCCESS':
            return {
                ...state,
                employee: action.payload,
                isAuthUser: true
            }
        case 'EMPLOYEE_LOGIN_FAILURE':
            return {
                ...state,
                isAuthUser: false
            };

        case 'FETCH_NEEDY_LOGIN_SUCCESS':
            return {
                ...state,
                needy: action.payload,
                isAuthUser: true
            }
        case 'NEEDY_LOGIN_FAILURE':
            return {
                ...state,
                isAuthUser: false
            };
        default:
            return state;
    }
}