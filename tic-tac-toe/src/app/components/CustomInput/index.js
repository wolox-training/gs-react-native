import React, { Fragment } from 'react';

export const CustomInput = props => (
  <Fragment>
    <label>{props.label}</label>
    <input {...props.input} type={props.type} />
  </Fragment>
);
