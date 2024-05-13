
import React, { useState } from 'react';
import initialContacts from '../../initialContacts.json';
// import { FaBeer } from 'react-icons/fa';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(initialContacts)
  const [search, setSearch] = useState('');

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
    return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className={css.h1}>Phonebook</h1>
      {/* <ContactForm />*/}
      <SearchBox value={search} onSearch={setSearch} /> 
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  )
}


