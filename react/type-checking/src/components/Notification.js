import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ messages }) => (
  <ul>
    {messages.map((value, index) => (
      <li key={index}>{value}</li>
    ))}
  </ul>
);
Notification.propTypes = {
  messages: PropTypes.array,
};

export default Notification;
