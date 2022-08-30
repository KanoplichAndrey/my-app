// import React from 'react';

import { useState, useEffect } from 'react';

const Test = () => {
  const [state, setState] = useState('ждите');
  function akaFetch () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.random());
      }, 5000);
    });
  }

  useEffect(() => {
    akaFetch()
      .then(setState)
      .catch(console.error);
  }, []);

  return (
  // eslint-disable-next-line react/react-in-jsx-scope
  <div>{state}</div>

  );
};

export default Test;
