import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddContact } from '../contactActions';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const setNameRef = useRef(setName);
  const setNumberRef = useRef(setNumber);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    handleAddContact(
      dispatch,
      contacts,
      name,
      number,
      setNameRef.current,
      setNumberRef.current
    );
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={css.inputItem}
        type="text"
        name="name"
        required
        value={name}
        onChange={handleNameChange}
      />
      <br />
      <input
        className={css.inputItem}
        type="text"
        name="number"
        required
        value={number}
        onChange={handleNumberChange}
      />
      <br />
      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
