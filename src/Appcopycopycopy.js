// import classNames from 'classnames';
import React, { useState } from 'react';

function Appcopycopycopy (event) {
  const [count, setCount] = useState(0);
  const [value1, setValue1] = useState('');

  function g () {
    // setValue(event.target.value);
    setCount(count + 1);
  };
  return <>
  <div>
    <input onChange={g} /><span>{count}</span>

    <input value={value1} onChange={(event) => { setValue1(event.target.value); }} /><span>{value1 * 2}</span>
    {/* <button onClick={() => { value = '' }}>button</button>
    <button onClick={() => { value = ''}}>button</button> */}
  </div>

    </>;
};

export default Appcopycopycopy;
