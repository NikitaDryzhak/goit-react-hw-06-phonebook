import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li key={id} className={s.listContacts}>
      <p>
        {name}: {number}
      </p>
      <button className={s.listBtn} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
