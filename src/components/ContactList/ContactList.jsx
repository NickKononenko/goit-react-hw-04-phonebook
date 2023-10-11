import css from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts
        .filter(contact => {
          return contact.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map(contact => {
          const { id, name, number } = contact;
          return (
            <li key={id} id={id}>
              <span className={css.contact}> {`${name}: ${number}`}</span>
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
