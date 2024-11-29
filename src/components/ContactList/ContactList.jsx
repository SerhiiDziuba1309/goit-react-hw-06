import React from 'react';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.item} key={contact.id} className={s.item}>
          <Contact {...contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
