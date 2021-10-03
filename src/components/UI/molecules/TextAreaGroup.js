import React from 'react';

import './styles/textareagroup.css';

const TextAreaGroup = props => (
  <div className="form-group">
    <label htmlFor={props.name}>{props.label} *</label>
    <textarea
      className="form-control text-group"
      id={props.name}
      name={props.name}
      placeholder={props.ph}
      ref={props.register({
        required: "Please write a valid message.",
        minLength: {
          value: 50,
          message: "Message must be at least 50 characters long"
        }})}/>
        {props.error &&
          <div className="invalid-feedback d-flex">
              Message must be at least 50 characters long.
          </div>
        }
  </div>
);

export default TextAreaGroup;
