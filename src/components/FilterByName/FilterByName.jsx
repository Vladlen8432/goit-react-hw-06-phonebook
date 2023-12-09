import css from "./FilterByName.module.css"

const SearchInput = ({ value, onChange }) => (
  <input className={css.inputFilter} type="text" name="filter" value={value} onChange={onChange} />
);

export default SearchInput;
