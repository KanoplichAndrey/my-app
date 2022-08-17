// import classNames from 'classnames';
import React, { useState, useEffect } from 'react';

function Appcopycopy () {
  const [type, setTupe] = useState('users');
  const [date, setDate] = useState([]);

  // console.log('component render');
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setDate(json));
  }, [type]);

  return (
    <>
  <div>
    <h1> Ресурс: {type}</h1>
  </div>

    <button onClick={() => { setTupe('users'); }}> ползователи</button>
    <button onClick={() => { setTupe('todos'); }}> Todos</button>
    <button onClick={() => { setTupe('posts'); }}> посты</button>
    <pre>
      {JSON.stringify(date, null, 2)}
    </pre>
   </>
  );
};

export default Appcopycopy;
