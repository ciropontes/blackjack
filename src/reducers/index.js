import blackjackReducer from './blackjackReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
    blackjackState: blackjackReducer,
});