import { combineReducers } from 'redux';
import employeeReducer from './EmployeeReducer';
import LoginReducer from './LoginReducer';
import donorReducer from './DonorReducer';
import donationReducer from './DonationReducer';
import needyReducer from './NeedyReducer';
import npReducer  from './NpReducer';

const rootReducer = combineReducers({
 
    employeeReducer,
    donorReducer,
    donationReducer,
    needyReducer,
    npReducer,
    LoginReducer,

 
});
 
export default rootReducer;