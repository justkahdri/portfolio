import React from 'react';

const ContactForm = ({handleSubmit, children}) => {
  return (
    <article id="form-container" className="col-12 col-md col-lg-6 order-1 align-self-center">
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        {children}
      </form>
    </article>
  );
}

export default ContactForm;
