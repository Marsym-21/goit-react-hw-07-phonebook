import * as contactsActions from './contactsAction';
import { fetchContact } from './contacts-api';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const contacts = await fetchContact();
    console.log(contacts.data);
    dispatch(contactsActions.fetchContactsSuccess(contacts.data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};
