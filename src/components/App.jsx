import React from "react";

import Section from "./Section/Section";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import useLocalStorage from "./Hooks/useLocalStorage";
const App = () => {


  
  




    return (
      
      <>
        <h1>PhoneBook</h1>
        <Section>
          <Form />
        </Section>
        <Section title="Contacts" >
          <Filter />
          < ContactList/>
        </Section>
      </>
    )

  }



export default App
