import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = ({ contacts, onClick }) => {
  const filterValue = useSelector(state => state.valueFilter);

  const visibleContacts = useMemo(() => {
    const normalizeFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  }, [contacts, filterValue]);

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          &#10003; {name}: {phone}{' '}
          <button
            className={css.contact_btn}
            type="submit"
            id={id}
            onClick={onClick}
          >
            Delet
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contacts;
