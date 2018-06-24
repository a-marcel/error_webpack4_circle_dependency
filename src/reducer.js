import { combineReducers } from 'redux';
import contentPerUrlReducer from './contentPerUrl';


export default function createReducer(asyncReducers) {
  return combineReducers({
    contentPerUrlState: contentPerUrlReducer,
    ...asyncReducers
  });
}
