import React, { Fragment } from 'react';

export const textInput = props => {
  const { label, input, type, meta } = props;
  return (
    <Fragment>
      <label htmlFor="label">{label}</label>
      <input {...input} type={type} />
      {meta.error && meta.touched && <div style={{ color: 'red' }}>{meta.error}</div>}
    </Fragment>
  );
};
