import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { Item, ButtonDelete, Name } from './ContactItem.styled';

export const ContactItem = ({ contact: {id, name, phone } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <Item>
      <Name>{name}:</Name>
      <p>{phone}</p>

      <ButtonDelete type="button" onClick={handleDelete}>
        Delete
      </ButtonDelete>
    </Item>
  );
};
