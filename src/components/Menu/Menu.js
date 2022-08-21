import React, { useState, useEffect } from 'react';
import { getHeaderMenu } from '../../servis/servis';
const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const servisMenu = getHeaderMenu();
    setMenu(servisMenu);
  }, []);
  return (
        <ul>
            {menu.map((value, index) => {
              return <li key={index}><a href={'#' + value}>{value}  </a> </li>;
            })}
        </ul>
  );
};

export default Menu;
