import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue, getFilterValue } from '../redux/filterSlice';
// import { deletContactsValue } from '../redux/contactSlice';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContacts,
} from 'redux/contacts/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();
  const contactsValue = useSelector(state => state.contacts.entities);
  const addContactFulfilled = useSelector(
    state => state.contacts.addContactFulfilled
  );
  const deleteContactFulfilled = useSelector(
    state => state.contacts.deleteContactFulfilled
  );
  const filterValue = useSelector(getFilterValue);

  const deletName = evt => {
    const dataId = evt.target.id;
    dispatch(deleteContacts(dataId));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (addContactFulfilled) {
      dispatch(fetchContacts());
    }
  }, [dispatch, addContactFulfilled]);

  useEffect(() => {
    if (deleteContactFulfilled) {
      dispatch(fetchContacts());
    }
  }, [dispatch, deleteContactFulfilled]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className="bookcontacts">
        <h1>PhoneBook</h1>
        <Phonebook contacts={contactsValue} />
        <h1>Contacts</h1>
        <Filter
          value={filterValue}
          onChange={evt => dispatch(setFilterValue(evt.currentTarget.value))}
        />
        <Contacts contacts={contactsValue} onClick={deletName} />
      </div>
    </div>
  );
};
