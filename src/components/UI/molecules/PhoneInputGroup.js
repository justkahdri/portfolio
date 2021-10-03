import React from 'react';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';
import './styles/phoneinputgroup.css';

const PhoneInputGroup = props => (
    <div className={`form-group ${props.custom || ''}`}>
      <label htmlFor={props.name}>{props.label}{props.required && ' *'}</label>
      <PhoneInput
        country={'us'}
        onChange={number => props.handleChange(number)}
      />
    </div>
);

export default PhoneInputGroup;
