import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue, getFilterValue } from '../redux/filterSlice';
import { setContactValue, deletContactsValue } from '../redux/contactSlice';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();
  const contactsValue = useSelector(state => state.contacts.entities);
  const filterValue = useSelector(getFilterValue);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deletName = evt => {
    const dataId = evt.target.id;
    const newArray = contactsValue.filter(contact => contact.id !== dataId);
    dispatch(deletContactsValue(newArray));
  };

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
        <Phonebook
          onSubmit={data => dispatch(setContactValue(data))}
          contacts={contactsValue}
        />
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
