import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';
import { nanoid } from 'nanoid';

import css from './Form.module.css';

const inputNameId = nanoid(5);
const inputPhoneId = nanoid(5);
const nameInputPattern =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const phoneInputPattern =
  '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [currentContact, setCurrentContact] = useState({});

  const dispatch = useDispatch();
  const onFormSubmit = event => {
    event.preventDefault();

    currentContact.id = nanoid(5);

    dispatch(addContact(currentContact));

    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const onInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        setCurrentContact(prevState => ({
          ...prevState,
          [name]: value,
        }));
        break;
      case 'number':
        setNumber(value);
        setCurrentContact(prevState => ({
          ...prevState,
          [name]: value,
        }));
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form} onSubmit={onFormSubmit}>
      <label htmlFor={inputNameId}>Name</label>
      <input
        id={inputNameId}
        className={css.form__input}
        type="text"
        name="name"
        value={name}
        pattern={nameInputPattern}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter name here"
        required
        onChange={onInputChange}
      />
      <label htmlFor={inputPhoneId}>Number</label>
      <input
        id={inputPhoneId}
        className={css.form__input}
        type="tel"
        name="number"
        value={number}
        pattern={phoneInputPattern}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Enter phone number"
        required
        onChange={onInputChange}
      />
      <button type="submit" className={css.form__button}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
