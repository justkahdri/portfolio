import React from 'react';

import './styles/contactcontainer.css';

const ContactContainer = ({handleSubmit, onSubmit, errors, register}) => {
  const required = tag => register({ required: `Please provide a valid ${tag}.`});

  return (
    <section id="contact--hero" className="row py-5">
        <article id="form-container" className="col-12 col-md col-lg-6 order-1 align-self-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name *</label>
                <input className="form-control" id="firstName"
                  type="text"  placeholder="First Name" name="firstName"
                  ref={required('name')}/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name *</label>
                <input className="form-control" type="text" id="lastName"
                   placeholder="Last Name" name="lastName" ref={required('last name')} />
              </div>
              {errors.firstName && <p>{errors.firstName.message}</p>}
              {/* TODO Alternative display for errors */}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input className="form-control" type="email" id="email"
                placeholder="Your email" name="email" ref={required('email')} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input className="form-control" type="tel" id="phone"
                placeholder="Your phone number"  name="phone" ref={register} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="What would you like to chat about?"
                ref={register({
                  required: "Please write a valid message.",
                  minLength: {
                    value: 50,
                    message: "Message must be at least 50 characters long"
                  }})}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit →</button>
            {/* TODO make button wider */}
          </form>
        </article>
        <article id="description-container"
          className="align-self-stretch col-12 col-md offset-lg-2 order-md-2 my-4 mb-md-0 py-3 rounded shadow text-md-right text-light">
          <h1>Get in Touch</h1>
          <h4 className="pt-4 pl-md-5">Maybe your're looking for a profile like mine, or perhaps something you saw here caught your attention...</h4>
          <h5 className='pt-4'>Let me know!</h5>
          <h5>I'd love to hear from you.</h5>
        </article>
    </section>
  )
}

export default ContactContainer;
