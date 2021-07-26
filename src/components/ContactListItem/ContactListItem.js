// Модули
import React from "react";
import PropTypes from "prop-types";

// Стили
//import styles from "../ContactListItem/contactListItem.module.css";

const ContactListItem = ({ name, number, id, onDeletContact }) => (
  <li>
    <p>
      {" "}
      {name}: {number}
    </p>
    <button type="button" onClick={() => onDeletContact(id)}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeletContact: PropTypes.func.isRequired,
};

export default ContactListItem;
