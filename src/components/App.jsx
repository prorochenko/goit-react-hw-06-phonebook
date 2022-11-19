import { useState, useEffect } from 'react';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import css from './CommonStyle.module.scss';
import Form from './Form/Form';
// import { nanoid } from 'nanoid';
// import Notiflix from 'notiflix';
import toast, { Toaster } from 'react-hot-toast';
// import { getFilter } from 'redux/filterSlice';

// import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const notify = () =>
    toast.success('Good Job! 👏', {
      position: 'top-right',
    });

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts' ?? ''));
  });

  // const [filter, setFilter] = useState('');

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const formSubmitHandler = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   if (contacts.some(contact => contact.name === name)) {
  //     Notiflix.Notify.failure(`${name} is already in contacts`);
  //     return;
  //   }

  //   setContacts(prevState => [contact, ...prevState]);
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(getFilter)
  //   );
  // };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
      <button type="button" onClick={notify}>
        press me
      </button>
      <div>
        <Toaster />
      </div>
    </div>
  );
}
