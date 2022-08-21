import React from 'react';
import './IconePerson.css';

const commonClass = 'default-IconePerson';

function IconePerso ({ text = '', customClass = '' }) {
  return <> <div className={`${commonClass} ${customClass}`}>{text}
  </div>

  </>;
}

export default IconePerso;
