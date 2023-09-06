import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onFilterChange = event => {
    const text = event.currentTarget.value;
    dispatch(filterChange({ text }));
  };
  return (
    <>
      <p>Find contact by name</p>
      <input
        className={css.section__input}
        type="text"
        placeholder="Enter name here"
        value={filter}
        onChange={onFilterChange}
      ></input>
    </>
  );
};

export default Filter;
