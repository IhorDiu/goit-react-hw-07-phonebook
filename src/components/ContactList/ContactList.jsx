import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  selectVisibleContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';

import { ListContacts } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  // const { items } = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const visibleContacts = items.filter(contacts =>
  //   contacts.name.toLowerCase().includes(filter.toLowerCase())
  // );

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




// export const selectTaskCount = createSelector([selectTasks], tasks => {
//   console.log("Calculating task count. Now memoized!");
//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// });