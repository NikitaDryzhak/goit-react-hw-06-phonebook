import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/add');

export const deleteContact = createAction('phonebook/delete');

export const changeFilter = createAction('phonebook/filter');
