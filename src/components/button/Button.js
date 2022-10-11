import React from 'react';

const commonClass = 'default-button';

const Button = ({ customClass = '', text = 'Default', onClick }) => {
  return <button className={`${commonClass} ${customClass}`} onClick={onClick} > {text}</button>;
};

export default Button;
