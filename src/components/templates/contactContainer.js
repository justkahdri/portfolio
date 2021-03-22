import React from 'react';

import ContactForm from '../UI/organisms/ContactForm';
import SideArticle from '../UI/molecules/SideArticle';
import FormGroup from '../UI/molecules/FormGroup';
import PhoneInputGroup from '../UI/molecules/PhoneInputGroup';
import TextAreaGroup from '../UI/molecules/TextAreaGroup';
import StyledButtons from '../UI/molecules/StyledButtons';

import './styles/contactcontainer.css';

const ContactContainer = props => {
  const setNumber = value => {props.number = value;}

  return (
    <section id="contact--hero" className="row py-5">
        <ContactForm handleSubmit={props.handleSubmit}>
          <div className="form-row">
            <FormGroup custom='col-md-6' label='First Name' name="firstName" register={props.register} error={props.errors.firstName} ph="John" type="text" required/>
            <FormGroup custom='col-md-6' label='Last Name' name="lastName" register={props.register} error={props.errors.lastName} ph="Doe" type="text" required/>
          </div>
          <FormGroup label='Email' name="email" register={props.register} ph="example@email.com" type="email" error={props.errors.email} required/>
          <PhoneInputGroup label='Phone' name="phone" handleChange={value => {setNumber(value)}}/>
          <TextAreaGroup label='Message' name="message" register={props.register} error={props.errors.message} ph="What would you like to chat about?"/>
          <StyledButtons label="Submit →" submit/>
        </ContactForm>
        <SideArticle {...props.sideSection}/>
    </section>
  );
}

export default ContactContainer;
