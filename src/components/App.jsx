import React from "react";
import { addContact } from 'redux/contacts/contactsSlice';
import Section from "./Section/Section";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
 const contacts = useSelector(state => state.contacts)
 const dispatch = useDispatch()
  
  const checkContactRepetition = (contact, presentContacts) => {
    for (let item of presentContacts) {
      if (item.name === contact.name) {
        return true;
      }
    }
    return false;
  };

  const showAlert = name => {
    alert(`${name} is already in your contacts`);
  };


  const onAddContact = (contact) => {
    if (checkContactRepetition(contact, contacts)) {
      showAlert(contact.name)
      return
    }

    dispatch(addContact(contact))
  }

    return (
      
      <>
        <h1>PhoneBook</h1>
        <Section>
          <Form addContact={onAddContact} />
        </Section>
        <Section title="Contacts" >
          <Filter />
          < ContactList/>
        </Section>
      </>
    )

  }



export default App
