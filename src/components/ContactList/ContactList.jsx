import css from "./ContactList.module.css"

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li className={css.contactListItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button className={css.deleteButton} onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
