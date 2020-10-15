import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers.js';

function ContactForm() {
  const [formState, setFormState] = useState
  (
    {
      name: '',
      email: '',
      message: '',
    }
  );
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;
  function handleChange(event) {
    if (event.target.name === 'email') 
    {//check email
      const isValid = validateEmail(event.target.value);
      console.log(isValid);
      !isValid || event.target.value === '' || event.target.value === ' '
      ? setErrorMessage('Please enter a valid email address')
      : setErrorMessage('')
    } 
    else 
    {//check other values
      !event.target.value
      ? setErrorMessage(`Please enter a ${event.target.name}.`)
      : setErrorMessage('')
    }
    console.log(errorMessage);
    // if (!errorMessage){
    // }
    setFormState
    (//can destructure the event.target.name attribute out of the element itself and make it dynamic as to which value we change and maintain the state of the other values we are not changing.
      {...formState, [event.target.name]: event.target.value}
      //using spread to retain the other key-value pairs in the object. without spread, formState would be overwritten to only contain the name: value key pair
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    !formState.name || !formState.email || !formState.message
    ? setErrorMessage('Invalid entries in the form.')
    : setErrorMessage('');
    console.log(formState);
    formState.name && formState.email && formState.message
    ? setErrorMessage('Thank you for your contact submission! 👍')
    : setErrorMessage('Invalid entries in the form.')
  }
  console.log(formState);
  return (
    <section>
      <h1 data-testid="contact">
        Contact Me
      </h1>
      <form id="contact-form" onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name">Name:</label> {/*have to use htmlFor because for is a JS keyword*/}
          <input autoComplete="off" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input autoComplete="off" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {
          errorMessage && //if theres an error message, if this first value is true then the second expression is evaluated. so when error message is a truthy value the div is rendered
          (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )
        }
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;