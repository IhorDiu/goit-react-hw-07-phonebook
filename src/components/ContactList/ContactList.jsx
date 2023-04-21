import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  getContacts,
  getFilter,
  getError,
  getIsLoading,
} from 'redux/selectors';

import { ListContacts } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = items.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListContacts>
      {isLoading && !error && <p>Loading Contacts...</p>}
      {error && <p>{error}</p>}
      {!isLoading &&
        !error &&
        visibleContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </ListContacts>
  );
};


