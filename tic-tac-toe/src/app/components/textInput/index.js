import React, { Fragment } from 'react';

const TextInput = ({ label, input, type, meta }) => (
  <Fragment>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} type={type} />
    {meta.error && meta.touched && <div style={{ color: 'red' }}>{meta.error}</div>}
  </Fragment>
);

export default TextInput;
