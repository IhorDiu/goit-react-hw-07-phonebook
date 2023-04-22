import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { useFilter } from 'hooks';

import { SearchField } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useFilter();
 

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
