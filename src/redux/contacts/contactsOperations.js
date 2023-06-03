// import * as contactsActions from './contactsAction';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './contacts-api';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());
//   try {
//     const contacts = await fetchContact();
//     console.log(contacts.data);
//     dispatch(contactsActions.fetchContactsSuccess(contacts.data));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const contacts = await fetchContact();
    return contacts;
  } catch (error) {
    return error.message;
  }
});

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const contacts = await addContact(contact);
      return contacts;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const contacts = await deleteContact(id);
      return contacts;
    } catch (error) {
      return error.message;
    }
  }
);
