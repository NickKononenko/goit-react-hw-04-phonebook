import css from './Filter.module.css';

const Filter = ({ onFilterChange, filter }) => {
  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={onFilterChange}
        value={filter}
      />
    </label>
  );
};

export default Filter;
