import { useSelector } from 'react-redux/es/hooks/useSelector';
import css from './ContactList.module.css';

import Contact from 'components/Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ul className={css.contacts__list}>
      {filteredContacts.map(({ id, number, name }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default ContactList;
