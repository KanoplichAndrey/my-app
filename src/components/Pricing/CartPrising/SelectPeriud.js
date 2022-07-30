import React, { useState } from 'react';

const SelectPeriud = (props) => {
  const cartPrising = [
    'Month',
    '1',
    '2',
    '3',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12'
  ];
  const [value, setValue] = useState(' ');

  const options = cartPrising.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

  return (
      <div>
         <select
            value={value}
            onChange={(event) => setValue(event.target.value)}
         >
            {options}
         </select>
      </div>
  );
};

export default SelectPeriud;
