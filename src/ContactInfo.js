// Updated ContactInfo.js

import React, { useState } from 'react';
import './ContactInfo.css';
import { MdEmail, MdMessage } from 'react-icons/md'; // Import icons from a library like react-icons

const ContactInfo = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to send the email
    console.log(`Email: ${email}, Message: ${message}`);
    // Reset form fields after submission
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="email"><MdEmail /> Your Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message"><MdMessage /> Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
