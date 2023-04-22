
import {ContactForm, ContactList, Filter } from 'components';

import { Title, Subtitle } from './App.styled';

export const App = () => {
  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </div>
  );
};
