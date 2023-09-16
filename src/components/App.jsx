import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import FormPhonebook from './formPhonebook';
import ContactsList from './ContactsList';
import FilterByName from './Filter';
import { Container } from './App.styled';

const contactsDefault = [
  { id: nanoid(), userName: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), userName: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), userName: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), userName: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('Contacts')) ?? [...contactsDefault]
  );
  const [filterValue, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const checkContact = newContact => {
    const normalizedNewContactName = newContact.userName.toLowerCase();
    return contacts.some(
      contact => contact.userName.toLowerCase() === normalizedNewContactName
    );
  };

  const formSubmitHandler = data => {
    const newUser = { id: nanoid(), ...data };
    checkContact(newUser)
      ? alert('This contact is already in list')
      : setContacts(prev => [...prev, newUser]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const changeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const visibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(({ userName }) =>
      userName.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <FormPhonebook onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <FilterByName value={filterValue} onChange={changeFilter} />
      <ContactsList
        contacts={visibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};

export default App;
