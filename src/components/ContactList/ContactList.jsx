import React from 'react';
import css from './contactList.module.css'


const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onDeleteContact(contact.id)} className={css.delete}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
 

export default ContactList;
