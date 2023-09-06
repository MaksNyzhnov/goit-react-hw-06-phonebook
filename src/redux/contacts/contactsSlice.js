import { createSlice } from '@reduxjs/toolkit';

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      if (checkContactRepetition(action.payload, state)) {
        showAlert(action.payload.name);
        return;
      }
      state.push({
        name: action.payload.name,
        number: action.payload.number,
        id: action.payload.id,
      });
    },
    deleteContact(state, action) {
      console.log(action.payload.id);
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});
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
export const { addContact, deleteContact } = ContactsSlice.actions;
export const contactsReducer = ContactsSlice.reducer;
