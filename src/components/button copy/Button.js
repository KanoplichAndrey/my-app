import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

const Button = ({
  chidren, onClick, className, disabled, active, ...attrs
}) => {
  const classes = classNames(
    'btn',
    classNames,
    { active }
  );

  return (

  <><button
      {...attrs}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >{chidren}</button></>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  chidren: 'Default button',
  onClick: () => { },
  className: '',
  disabled: false,
  active: false
};
export default Button;
