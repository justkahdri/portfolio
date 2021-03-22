import React from 'react';
import {Redirect, useLocation} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';

import ContactContainer from '../templates/contactContainer';
import Alert from '../UI/atoms/Alert';

function ContactPage() {
  const { register, handleSubmit, errors } = useForm();
  const [state, setState] = React.useState({
    sideSection: {
      title: "Get in Touch",
      content: "Maybe your're looking for a profile like mine, or perhaps something you saw here caught your attention...",
      cta: "Let me know!",
      salute: "I'd love to hear from you."
    },
    number: '',
    sent: false,
    error: null,
    error_alert: {
      importance: 'danger',
      strong: "We're sorry :(",
      message: 'An error ocurred while sending your message, try again later.'
    }
  });
  let location = useLocation();

  const onSubmit = data => {
    console.log(data);
    const templateParams = {
      first_name: data.firstName,
      last_name: data.lastName,
      content: data.message,
      email: data.email,
      phone: state.number,
    };
    emailjs
      .send("p_gmail", "portfolio_template", templateParams, process.env.REACT_APP_EMAILJS_ID)
      .then(
        function(response) {
          // console.log("SUCCESS!", response.status, response.text);
          setState({...state, sent: true});
        },
        function(err) {
          // console.log('ERROR', err);
          setState({...state, error: err});
        }
      );
  };

  return (
    state.sent
      ? <Redirect
            push to={{
              pathname: "/",
              search: "?sent=success",
              state: { referrer: location.pathname }
            }}
        />

    : <main role="main" id="contact-page" className="container">
        {state.error && <Alert {...state.error_alert}/>}
        <ContactContainer register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} number={state.number} sideSection={state.sideSection}/>
      </main>
  )
}

export default ContactPage;
