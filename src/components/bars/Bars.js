import React, { useState } from 'react';
import './Bars.css';

const commonClass = 'pos';

const Bars = ({ text = '', customClass = '' }) => {
  const [btnState, setbtnState] = useState(false);

  function handeleClick () {
    setbtnState(btnState => !btnState);
  }

  const toggleClassChek = btnState ? ' active ' : '';
  return (
      <>
         <div className={`${commonClass} ${customClass} btn ${toggleClassChek} ` } onClick={handeleClick}>
            {text}
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
         </div>
      </>
  );
};

export default Bars;
