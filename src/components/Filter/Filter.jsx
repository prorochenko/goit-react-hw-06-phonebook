import css from './Filter.module.scss';
import { useDispatch } from 'react-redux';
import { getFilter, setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handlerFilterList = e => {
    const inputValue = e.currentTarget.value.toLocaleLowerCase();
    dispatch(setFilter(inputValue));
  };
  return (
    <label>
      <input
        className={css.input}
        // value={getFilter}
        onChange={handlerFilterList}
        placeholder="Enter name"
        type="text"
      />
    </label>
  );
};

export default Filter;
