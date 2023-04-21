import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from "redux/operations";
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';

import { ListContacts } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const {items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log('items', items)

  useEffect(() => {
    dispatch(fetchContacts());
   
  }, [dispatch]);

  const visibleContacts = items.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <ListContacts>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ListContacts>
  );
};

