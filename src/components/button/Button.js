import React from 'react';

const commonClass = 'default-button';

const Button = ({ customClass = '', text = '' }) => {
  return <button className={`${commonClass} ${customClass}`} > {text}</button>;
};

export default Button;
