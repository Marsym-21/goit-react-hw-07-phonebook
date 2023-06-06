import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contactsOperations';
import css from './Contacts.module.css';

const Contacts = () => {
  const filterValue = useSelector(state => state.valueFilter);
  const contactsValue = useSelector(state => state.contacts.entities);
  const dispatch = useDispatch();

  const visibleContacts = useMemo(() => {
    const normalizeFilter = filterValue.toLowerCase();
    return contactsValue.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  }, [contactsValue, filterValue]);

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          &#10003; {name}: {phone}
          <button
            className={css.contact_btn}
            type="submit"
            id={id}
            onClick={evt => dispatch(deleteContacts(evt.target.id))}
          >
            Delet
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
