import { createReducer } from '@reduxjs/toolkit';

import { actions } from './actions';


export const contacts = createReducer([], {
[actions.addContact]: (state, {payload}) => [...state, payload],
[actions.deleteContacts] : (state,{payload}) => state.filter(({id})=>id !== payload),
});

export const filter = createReducer('', {
 [actions.chahgeFilter]: (state, {payload}) => [...state, payload],
});
