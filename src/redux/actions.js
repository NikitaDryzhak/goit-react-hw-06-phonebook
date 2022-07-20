import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add');

const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/filter');

export default { addContact, deleteContact, changeFilter };
