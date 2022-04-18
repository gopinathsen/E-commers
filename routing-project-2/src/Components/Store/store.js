import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../Reducers/IndexReducers';

const storage= createStore(RootReducer,applyMiddleware(thunk));
 export default storage;