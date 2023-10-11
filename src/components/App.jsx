import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('Contacts did update');
  }, [contacts]);
  //
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    console.log('Component did mount');
    if (contacts) {
      const parsedContacts = JSON.parse(contacts);
      setContacts(parsedContacts);
    }
  }, []);

  const handleDelete = id => {
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
