import { useState, useEffect } from 'react';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import css from './CommonStyle.module.scss';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import toast, { Toaster } from 'react-hot-toast';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/filterSlice';

export default function App() {
  const notify = () =>
    toast.success('Good Job! 👏', {
      position: 'top-right',
    });

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts' ?? ''));
  });

  const [filter, setFilter] = useState('');

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === name)) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }

    setContacts(prevState => [contact, ...prevState]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChange={changeFilter} />
        <Contacts list={getVisibleContacts()} onDeleteContact={deleteContact} />
      </Section>
      {value}
      <button onClick={() => dispatch(increment(100))}>increment</button>
      <button onClick={() => dispatch(decrement(100))}>decrement</button>
      <button type="button" onClick={notify}>
        press me
      </button>
      <div>
        <Toaster />
      </div>
    </div>
  );
}
