import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import css from './Contact.module.css';

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.contactContainer}>
      <div className={css.info}>
        <div className={css.details}>
          <IoPersonSharp className={css.icon} />
          <p className={css.name}>{contact.name}</p>
        </div>
        <div className={css.details}>
          <FaPhoneAlt className={css.icon} />
          <p className={css.number}>{contact.number}</p>
        </div>
      </div>
      <button className={css.deleteButton} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
}
