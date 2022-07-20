import React from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import contactActions from '../../redux/actions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import Notiflix from 'notiflix';

export default function Form() {
  const [params, setParams] = useState({
    id: nanoid(10),
    name: '',
    number: '',
  });
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setParams({ ...params, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name.includes(params.name))) {
      Notiflix.Notify.failure(`Contact ${params.name} is already exist`);
    } else if (
      contacts.some(contact => contact.number.includes(params.number))
    ) {
      Notiflix.Notify.failure(`Number ${params.number} is already exist`);
    } else dispatch(contactActions.addContact(params));
    setParams({ id: nanoid(10), name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        {' '}
        Name
        <input
          className={s.input}
          onChange={handleInputChange}
          value={params.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        Number
        <input
          className={s.input}
          onChange={handleInputChange}
          value={params.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btnSubmit} type="submit">
        Add contact
      </button>
    </form>
  );
}
