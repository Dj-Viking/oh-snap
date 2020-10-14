import React from 'react';

function ContactForm() {
  return (
    <section>
      <h1>
        Contact Me
      </h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label> {/*have to use htmlFor because for is a JS keyword*/}
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;