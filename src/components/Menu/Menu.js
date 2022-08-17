
import React from 'react';
// import { ggg } from './redux/state';
// import { useState, useEfect } from 'react';
const Menu = (props) => {
// const [menu, setMenu] = useState([]);

  // useEfect((ggg) => {
  //   setTimeout(() => {
  //     setMenu(menu);
  //   }, 10000);
  // }, []);

  return (
        <>
        <ul>
            {props.menuItems.map((value, index) => {
              return <li key={index}><a href={'#' + value} >{value}</a> </li>;
            })}
        </ul>
        </>
  );
};

export default Menu;
