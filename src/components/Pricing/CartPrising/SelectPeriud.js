import React, { useState, useEffect } from 'react';
import { getCartPrisingBase } from '../../../servis/servis';
const SelectPeriud = () => {
  // const cartPrising = [
  //   'Month',
  //   '1',
  //   '2',
  //   '3',
  //   '5',
  //   '6',
  //   '7',
  //   '8',
  //   '9',
  //   '10',
  //   '11',
  //   '12'
  // ];
  const [value, setValue] = useState(' ');
  const [cartPrising, setCartPrising] = useState([]);
  useEffect(() => {
    const servisCartPrising = getCartPrisingBase();
    setCartPrising(servisCartPrising);
  }, []);

  const options = cartPrising.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

  return (
      <>
         <select
            value={value}
            onChange={(event) => setValue(event.target.value)}
         >
            {options}
         </select>
      </>
  );
};

export default SelectPeriud;
