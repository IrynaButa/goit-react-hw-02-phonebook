import React from "react";
import PropTypes from "prop-types";
import styles from "./Phonebook.module.css";

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className={styles.form}>
    {contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name}
        {" : "}
        {contact.number}
        <button
          type="button"
          name="delete"
          onClick={() => onDeleteContact(contact.id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default Contacts;
