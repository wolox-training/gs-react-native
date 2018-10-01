import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, input, type, meta }) => (
  <Fragment>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} type={type} />
    {meta.error && meta.touched && <div style={{ color: 'red' }}>{meta.error}</div>}
  </Fragment>
);

TextInput.propTypes = {
  type: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  meta: PropTypes.object.isRequired
};

export default TextInput;
