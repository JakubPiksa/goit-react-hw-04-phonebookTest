import React, { useState } from 'react';
import css from './contactForm.module.css'


const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className={css.formInput}
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
      />
      <input
        className={css.formInput}
        type="tel"
        name="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        placeholder="Phone number"
        pattern="\d{1,9}"
        title="Phone number must contain numbers only"
        required
      />
      <button type="submit" className={css.button}>Add Contact</button>
    </form>
  );
};

export default ContactForm;
