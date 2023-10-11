import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const isContactExists = contacts.some(contact => contact.name === name);

  const handleSubmit = event => {
    event.preventDefault();
    if (isContactExists) {
      alert(`${name} is already in contacts`);
      setName('');
      setNumber('');
    } else {
      const newContact = {
        name,
        number,
        id: nanoid(5),
      };
      addContact(newContact);
      setName('');
      setNumber('');
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <span className={css.formLabel}>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <span className={css.formLabel}>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button
        type="submit"
        className={name && number ? css.addContactBtnYellow : css.addContactBtn}
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
