import React from 'react';

const commonClass = 'default-button'

 const Button = ({text = '', customClass = '' }) => {
    return <button className={`${commonClass} ${customClass}`}
    >{text}</button>
};

export default Button;

