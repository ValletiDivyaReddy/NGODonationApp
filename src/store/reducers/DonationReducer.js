const initialState = {
    donations: [],
    donation :undefined,
    newDonation:undefined
}
 
export default function DonationReducer(state = initialState, action) {
 
    switch (action.type) {
 
        case 'FETCH_ALL_DONATIONS_SUCCESS':
            return {
                ...state,
               donations : action.donations
            };
        case 'FETCH_DONATION_BY_ID_SUCCESS':
            return {
                ...state,
                donation: action.payload
            };
        case 'ADD_DONATION_SUCCESS':
            return {
                ...state,
                newDonation: action.payload
            };
 
       
        default:
            return state;
 
    }
}