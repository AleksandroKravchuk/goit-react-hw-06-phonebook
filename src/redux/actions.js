import { createAction } from "@reduxjs/toolkit";

// export const addContact = (value) => ({ type: 'name', payload: value });
// export const deleteContact = (value) => ({ type: 'name', payload: value });

 const addContact = createAction('add/contact');
 const deleteContact = createAction('delete/contact');
const chahgeFilter = createAction('change/filter');
 
export const actions=  { addContact, deleteContact, chahgeFilter }