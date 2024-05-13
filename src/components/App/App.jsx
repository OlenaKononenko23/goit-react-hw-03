
import React, { useState, useEffect } from 'react';
import initialContacts from '../../initialContacts.json';
// import { FaBeer } from 'react-icons/fa';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';

const getSavedContacts = () => {
  const savedContacts = localStorage.getItem('savedContacts');
  return savedContacts ? JSON.parse(savedContacts) : initialContacts;
};

export default function App() {
  const [contacts, setContacts] = useState(getSavedContacts)
  const [search, setSearch] = useState('');

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
    return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className={css.h1}>Phonebook</h1>
      <ContactForm contacts={contacts} setContacts={setContacts}/>
      <SearchBox value={search} onSearch={setSearch} /> 
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  )
}


