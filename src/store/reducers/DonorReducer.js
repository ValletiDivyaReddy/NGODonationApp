const initialState = {
    donors: [],
    donor: undefined,
    newDonor: undefined,
    update:''
}
 
export default function DonorReducer(state = initialState, action) {
 
    switch (action.type) {
 
        case 'FETCH_ALL_DONORS_SUCCESS':
            return {
                ...state,
                donors: action.donors
            };
 
        case 'FETCH_DONOR_BY_ID_SUCCESS':
            return {
                ...state,
                donor: action.payload
            };
 
        case 'ADD_DONOR_SUCCESS':
            return {
                ...state,
                newDonor: action.payload
            };

        case 'CREATE_USER_SUCCESS':
            return {
                ...state,
                newUser: action.payload
            };

        case 'UPDATE_DONOR_SUCCESS':
            return {
                ...state,
                update: action.payload
            };
    
 
        default:
            return state;
 
    }
}