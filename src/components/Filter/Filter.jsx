import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import { SearchField } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const findContact = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <SearchField>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" value={filter} onChange={findContact} />
    </SearchField>
  );
};
