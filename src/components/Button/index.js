import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = (props) => {
  return (
    <button onClick={props.handleClick} className="btn">
      {props.buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  buttonText: "Let's match",
};

export default Button;
