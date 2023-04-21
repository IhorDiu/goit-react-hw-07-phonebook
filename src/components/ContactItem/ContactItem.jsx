import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice';
import { Item, ButtonDelete, Name } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <Item>
      <Name>{name}:</Name>
      <p>{number}</p>

      <ButtonDelete type="button" onClick={handleDelete}>
        Delete
      </ButtonDelete>
    </Item>
  );
};
