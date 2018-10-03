import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, input, meta }) => (
  <Fragment>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} type="text" />
    {meta.error && <div style={{ color: 'red' }}>{meta.error}</div>}
  </Fragment>
);

TextInput.propTypes = {
  input: PropTypes.instanceOf(Object),
  label: PropTypes.string,
  meta: PropTypes.instanceOf(Object)
};

export default TextInput;
