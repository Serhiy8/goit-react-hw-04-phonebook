import { Component } from 'react';
import { nanoid } from 'nanoid';
import FormPhonebook from './formPhonebook';
import ContactsList from './ContactsList';
import FilterByName from './Filter';
import { Container } from './App.styled';

const contacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: [...contacts],
    filter: '',
  };

  componentDidMount() {
    const contactsParse = JSON.parse(localStorage.getItem('Contacts'));
    contactsParse &&
      this.setState({
        contacts: contactsParse,
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const data = JSON.stringify(this.state.contacts);
      localStorage.setItem('Contacts', data);
    }
  }

  formSubmitHandler = data => {
    const newUser = { id: nanoid(), ...data };
    this.checkContact(newUser)
      ? alert('This contact is already in list')
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newUser],
        }));
  };

  checkContact = newContact => {
    const normalizedNewContactName = newContact.name.toLowerCase();
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizedNewContactName
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Container>
        <FormPhonebook onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <FilterByName value={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
