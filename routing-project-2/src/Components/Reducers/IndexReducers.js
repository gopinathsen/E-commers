import {combineReducers} from 'redux';
import AuthReducers from './AuthReducers';

const RootReducer = combineReducers({
    auth:AuthReducers
})
export default RootReducer;