
import { React, useState, useEffect } from 'react';
import { getHeaderState } from '../../servis/servis';
const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const menuItem = getHeaderState();

      setMenu(menuItem);
    }, 5000);
  }, []);

  return (
        <>
        <ul>
            { menu.map((value, index) => {
              return <li key={index}><a href={'#' + value} >{value}</a> </li>;
            })}
        </ul>
        </>
  );
};

export default Menu;
