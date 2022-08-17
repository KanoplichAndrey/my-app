// import classNames from 'classnames';
import React, { useState } from 'react';

function initial () {
  console.log('some calculation');
  return Math.trunc(Math.random() * 20);
}

function Appcopy () {
  const [inCart, setIncart] = useState(false);
  function handler () {
    setIncart(!inCart);
  }

  const [counter, setCount] = useState(() => initial());
  function handlerPlus () {
    setCount(counter + 1);
    setCount(prev => prev + 1);
    // setCount(prev1 => prev1 + 1);
  }

  function handlerMinus () {
    setCount(counter - 1);
  }
  const text = inCart ? 'не в корзине' : 'в корзине';

  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now()
  });

  function abdateTitle () {
    setState(prev => {
      return {
        ...prev,
        title: 'новое название'
      };
    });
  };

  const [stat, setStat] = useState(false);
  const text1 = stat
    ? {
        title: 'Счетчик',
        date: Date.now()
      }
    : {

        title: 'новое название'
      };
  function abdateTitl () {
    setStat(!stat);
  };

  const isAuth = true;
  return (
    <>
<div>
{isAuth && <p>пожалуйста, авторизуйтесь</p>}
</div>
    <button onClick={handler}> { text }</button>
    <div>
      <h1>{'счетчик :' + counter}</h1>
      <button onClick={handlerPlus}> плююс + {counter}</button>
      <button onClick={handlerMinus}>минус + {counter}</button>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
      <button onClick={abdateTitle}>Изменить</button>

      <pre>
        {JSON.stringify(text1, null, 2)}
      </pre>
      <button onClick={abdateTitl}>Изменить</button>
    </div>
   </>
  );
};

export default Appcopy;
