import css from './Filter.module.scss';

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      <input
        className={css.input}
        value={filter}
        onChange={onChange}
        placeholder="Enter name"
        type="text"
      />
    </label>
  );
};

export default Filter;
