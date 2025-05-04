import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';


export default function ContactList({ contactList }) {
  return (
    <ul className={css.contactList}>
    {contactList.map(contact => (
      <li className={css.contactListItem} key={contact.id}>
        <Contact contact={contact} />
      </li>
    ))}
  </ul>
  );
}
