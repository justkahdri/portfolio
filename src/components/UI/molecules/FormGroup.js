import React from 'react';

const FormGroup = props => (
  <div className={`form-group ${props.custom || ''}`}>
    <label htmlFor={props.name}>{props.label}{props.required && ' *'}</label>
    <input className="form-control" id={props.name}
      type={props.type}  placeholder={props.ph} name={props.name}
      ref={props.required
        ? props.register({ required: `Please provide a valid ${props.label.toLowerCase()}.`})
        : props.register}/>
    {props.error &&
      <div className="invalid-feedback d-flex">
          {props.error.message}
      </div>
    }
  </div>
);

export default FormGroup;
