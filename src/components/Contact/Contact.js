import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contact_name}>
      <div className={css.contacts__list__item__content}>
        <span>
          {name}: {number}
        </span>
        <button
          type="button"
          className={css.delete_btn}
          onClick={() => dispatch(deleteContact({ id }))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
export default Contact;
