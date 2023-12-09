import { nanoid } from 'nanoid';
import { addContact, deleteContact, updateFilter } from './Redux/ContactSlice';

export const handleAddContact = (dispatch, contacts, name, number) => {
  if (
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
  ) {
    alert(`${name} is already in contacts`);
  } else {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    dispatch(addContact(newContact));
  }
};

export const handleDeleteContact = (dispatch, id) => {
  dispatch(deleteContact(id));
};

export const handleFilterChange = (dispatch, value) => {
  dispatch(updateFilter(value));
};
