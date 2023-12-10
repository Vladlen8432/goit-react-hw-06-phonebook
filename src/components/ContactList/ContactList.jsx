import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../Redux/ContactSlice';

import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li className={css.contactListItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.deleteButton}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
