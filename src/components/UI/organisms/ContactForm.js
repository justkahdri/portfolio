import React from 'react';

import FormGroup from '../molecules/FormGroup';
import PhoneInputGroup from '../molecules/PhoneInputGroup';
import TextAreaGroup from '../molecules/TextAreaGroup';

const ContactForm = ({handleSubmit, register, errors, getNumber}) => {
  return (
    <article id="form-container" className="col-12 col-md col-lg-6 order-1 align-self-center">
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="form-row">
          <FormGroup custom='col-md-6' label='First Name' name="firstName" register={register} error={errors.firstName} ph="John" type="text" required/>
          <FormGroup custom='col-md-6' label='Last Name' name="lastName" register={register} error={errors.lastName} ph="Doe" type="text" required/>
        </div>
        <FormGroup label='Email' name="email" register={register} ph="example@email.com" type="email" error={errors.email} required/>
        <PhoneInputGroup label='Phone' name="phone" handleChange={value => {getNumber(value)}}/>
        <TextAreaGroup label='Message' name="message" register={register} error={errors.message} ph="What would you like to chat about?"/>
        <button type="submit" className="btn btn-primary">Submit →</button>
        {/* TODO make button wider */}
      </form>
    </article>
  );
}

export default ContactForm;
