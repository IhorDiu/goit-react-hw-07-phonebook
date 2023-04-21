import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';

import { ListContacts } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log('contacts', contacts)

  const visibleContacts = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <ListContacts>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ListContacts>
  );
};

