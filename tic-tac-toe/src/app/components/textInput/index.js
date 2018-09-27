import React, { Fragment } from 'react';

export const textInput = props => (
  <Fragment>
    <label htmlFor="label">{props.label}</label>
    <input {...props.input} type={props.type} />
  </Fragment>
);
