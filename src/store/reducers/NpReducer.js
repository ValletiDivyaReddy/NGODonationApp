const initialState = {
    needyPeople: [],
    needyPerson: undefined,
    newNeedyPerson: undefined,
    login: ''
}
 
export default function NpReducer(state = initialState, action) {
 
    switch (action.type) {
 
        case 'FETCH_ALL_REQUESTS_SUCCESS':
            return {
                ...state,
                needyPeople : action.needyPeople
            };

        case 'CREATE_NEEDYPEOPLE_SUCCESS':
                return {
                    ...state,
                    newNeedyPerson: action.payload
                };
        case 'CREATE_USER_SUCCESS':
                return {
                    ...state,
                    newUser: action.payload
                };


                default:
                    return state;
         
            }
}