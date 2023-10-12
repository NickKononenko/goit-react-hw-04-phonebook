import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    console.log('getContacts');
    if (savedContacts.length > 0) {
      const parsedContacts = JSON.parse(savedContacts);
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      localStorage.setItem('contacts', []);
    }
  }, [contacts]);

  const handleDelete = id => {
    console.log(id);
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div className={'phoneBook'}>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={addContact} />
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter onFilterChange={handleFilterChange} />
          <ContactList
            contacts={contacts}
            filter={filter}
            onDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
};

export default App;
