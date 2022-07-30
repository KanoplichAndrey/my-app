import React from 'react';

const Menu = (props) => {
  return (
        <ul>
            {/* <NavLink to= {'/' + value}>{value}  </NavLink> */}
            {props.menuItems.map((value, index) => {
              return <li key={index}><a href={'#' + value}>{value}  </a> </li>;
            })}
        </ul>
  );
};

export default Menu;
