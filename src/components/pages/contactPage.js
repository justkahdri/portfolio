import React from 'react';
import {Redirect, useLocation} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';

import ContactContainer from '../templates/contactContainer';

function ContactPage() {
  const { register, handleSubmit, errors } = useForm();
  const [sent, setSent] = React.useState(false);
  const [number, setNumber] = React.useState('');
  let location = useLocation();

  const onSubmit = data => {
    console.log(data);
    const templateParams = {
      first_name: data.firstName,
      last_name: data.lastName,
      content: data.message,
      email:data.email,
      phone:number,
    };
    // TODO set emailjs
    console.log(templateParams);
    // emailjs
    //   .send("p_gmail", "portfolio_template", templateParams, "user_6kBQO5eAGRpWqpJAVWN0A")
    //   .then(
    //     function(response) {
    //       console.log("SUCCESS!", response.status, response.text);
    //       setSent(true);
    //     },
    //     function(err) {
    //       console.log('ERROR', err);
    //     }
    //   );
  };

  return (
    sent
      ? <Redirect
            push to={{
              pathname: "/",
              search: "?sent=success",
              state: { referrer: location.pathname }
            }}
        />

    : <main role="main" id="contact-page" className="container">
        <ContactContainer register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} getNumber={setNumber}/>
      </main>
  )
}

export default ContactPage;
