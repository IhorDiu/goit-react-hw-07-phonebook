import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { useIsLoading, useError, useVisibleContacts } from 'hooks';
import { ContactItem } from 'components';
import { ListContacts } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useVisibleContacts();
  const isLoading = useIsLoading();
  const error = useError();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
