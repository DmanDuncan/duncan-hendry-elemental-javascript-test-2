import React, { useEffect } from "react";
import '../styles/contact.scss';

const Contact = () =>  { 

  useEffect(() => {
    // assign variable to form fields
    const contactForm = document.querySelector('.contact-form');
    const contactFormName = document.querySelector('.contact-form-name');
    const contactFormEmail = document.querySelector('.contact-form-email');
    const contactFormNumber = document.querySelector('.contact-form-number');
    const formStatusMessage = document.querySelector('.form-status-message');

    // handle for submission
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // load form field values into object
      const formContent = {
        name: contactFormName.value,
        email: contactFormEmail.value,
        phoneNumber: contactFormNumber.value,
      }

      fetch("http://dev3.elemental.co.za/elemental-cms/front_end/contact_form_test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formContent),
      }).then(() => {
        // display success message
        setTimeout(() => {
          formStatusMessage.textContent = 'Form submitted ✔'
        }, 100);
        
        // hide success message
        setTimeout(() => {
          formStatusMessage.textContent = ''
        }, 3000);

        //empty form
        contactForm.reset();
      }).catch(() => {
        // display failure message
        setTimeout(() => {
          formStatusMessage.textContent = 'Form failed to submit ❌'
        }, 100);
        
        // hide failure message
        setTimeout(() => {
          formStatusMessage.textContent = ''
        }, 3000);
      });
    });

  }, []);

  return (
    <main className="contact-page-container">
      <title>Contact</title>
        <h1>Contact</h1> 
        <form className="contact-form" action="">
          <label htmlFor="">
            Name - letters only
            <input className="contact-form-name" type="text" pattern="[a-zA-Z\s]{1,}" 
            title="Enter letters and spaces only" required/>
          </label>
          <label htmlFor="">
            Email 
            <input className="contact-form-email" type="email" pattern="[a-zA-Z0-9]{1,}[@]{1}[a-zA-Z0-9]{1,}[\.]{1}[com]{3}" 
            title="Enter a valid email address" required/>
          </label>
          <label htmlFor="">
            Phone Number
            <input className="contact-form-number" type="tel" pattern="[\+]{1}[27]{1}[0-9]{10,}" 
            title="Enter a valid South African phone number" required/>
          </label>
          <button>submit</button>
        </form>
        <p className="form-status-message"></p>
    </main>
  );
}

export default Contact;
 