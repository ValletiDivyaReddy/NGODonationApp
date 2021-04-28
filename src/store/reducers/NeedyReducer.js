const initialState = {
    needyPeoples: [],
    needyPeople: undefined,
    newNeedyPeople: undefined,
    newDistribution:undefined,
    deleted:''
}
 
export default function NeedyReducer(state = initialState, action) {
 
    switch (action.type) {
 
        case 'FETCH_ALL_NEEDYPEOPLE_SUCCESS':
            return {
                ...state,
               needyPeoples : action.needyPeoples
            };
        case 'FETCH_NEEDYPEOPLE_BY_ID_SUCCESS':
                return {
                    ...state,
                    needyPeople: action.payload
                };
     
        case 'ADD_NEEDYPEOPLE_SUCCESS':
                return {
                    ...state,
                    newNeedyPeople: action.payload
                };
        
        case 'HELP_NEEDYPEOPLE_SUCCESS':
            return {
                ...state,
                newDistribution: action.payload
            };
        case 'DELETE_NEEDYPEOPLE_SUCCESS':
                return {
                    ...state,
                    deleted: action.deleted
                    };
        
        default:
            return state;
 
    }
}