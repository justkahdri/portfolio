import React from 'react';

import ContactForm from '../UI/organisms/ContactForm';
import SideArticle from '../UI/molecules/SideArticle';
import './styles/contactcontainer.css';

const ContactContainer = props => {
  return (
    <section id="contact--hero" className="row py-5">
        <ContactForm {...props}>
          
        </ContactForm>
        <SideArticle />
    </section>
  );
}

export default ContactContainer;
