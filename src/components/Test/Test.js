/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
// // import React from 'react';

import { useState, useEffect } from 'react';

// const Test = () => {
//   const [state, setState] = useState('ждите');

//   function akaFetch () {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(Math.random());
//       }, 10000);
//     });
//   };

//   useEffect(() => {
//     akaFetch()
//       .then(setState)
//       .catch(console.error);
//   }, []);

//   return (
//   // eslint-disable-next-line react/react-in-jsx-scope
//   <div>{state}</div>

//   );
// };

// export default Test;

// import { useState, useEffect } from 'react';

const Test = () => {
  const [type, setTupe] = useState('users');
  const [state, setState] = useState([]);

  async function f1 () {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
      const data = await response.json();
      console.log(JSON.stringify(data, null, 2));
    } catch (err) {
      console.log('error >>>', err);
    }
    // .then(id => {
    //   return id;
    // })
    // .then(json => {
    //   console.log(JSON.stringify(state, null, 2));
    // });
  }
  function f2 (nums) {
    const maxnum = 40;
    console.log(maxnum);
    for (const num of nums) {
      if (num > maxnum) {
        console.log(num);
        // eslint-disable-next-line no-const-assign
        maxnum += num;
      }
    }

    return maxnum;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => setState(json))
        .catch(console.error);
    }, 1000);
  }, [type]);

  return (
<>

<button onClick={() => { setTupe('users'); }}> ползователи</button>
    <button onClick={() => { setTupe('todos'); }}> Todos</button>
    <button onClick={() => { setTupe('posts'); }}> посты</button>
    <button onClick={() => { f1('users'); }}> посты</button>
    <button onClick={() => { f2('1700'); }}> посты</button>
    <pre>
      {JSON.stringify(state, null, 2)}

    </pre>
</>
  );
};

export default Test;
