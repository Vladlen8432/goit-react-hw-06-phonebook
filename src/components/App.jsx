import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './Redux/Store';
import {
  handleAddContact,
  handleDeleteContact,
  handleFilterChange,
} from './contactActions';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchInput from './FilterByName/FilterByName';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    persistor.persist();
  }, []);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) &&
      (!contact.blacklist || !contact.blacklist.includes('filter'))
  );

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className="container">
        <h1 className="phonebookHeader">Phonebook</h1>
        <ContactForm
          onAddContact={(name, number) =>
            handleAddContact(dispatch, contacts, name, number)
          }
        />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <SearchInput
          value={filter}
          onChange={event => handleFilterChange(dispatch, event.target.value)}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={id => handleDeleteContact(dispatch, id)}
        />
      </div>
    </PersistGate>
  );
};

export default App;
