import { Buttons } from "./styles";
import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return <Buttons onClick={props.handleClick}>{props.buttonText}</Buttons>;
};

Button.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  buttonText: "Let's match",
};

export default Button;
