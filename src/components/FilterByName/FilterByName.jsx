import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../Redux/ContactSlice';
import css from './FilterByName.module.css';

const SearchInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <input
      className={css.inputFilter}
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
