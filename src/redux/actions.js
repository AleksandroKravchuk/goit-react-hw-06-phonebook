import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('add/contact');
const deleteContact = createAction('delete/contact');
const chahgeFilter = createAction('change/filter');

export const actions = { addContact, deleteContact, chahgeFilter };
