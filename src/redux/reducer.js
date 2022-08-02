import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { actions } from './actions';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
 const items = createReducer([], {
[actions.addContact]: (state, {payload}) => [...state, payload],
[actions.deleteContacts] : (state,{payload}) => state.filter(({id})=>id !== payload),
});

 const filter = createReducer('', {
    [actions.chahgeFilter]: (_, { payload }) => payload,
});
export default combineReducers({
    items,
    filter,
})



