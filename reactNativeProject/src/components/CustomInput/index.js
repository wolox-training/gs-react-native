import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native";

const CustomInput = ({ input, ...rest }) => <TextInput {...rest} {...input} />;

CustomInput.propTypes = {
  input: PropTypes.instanceOf(Object)
};

export default CustomInput;
