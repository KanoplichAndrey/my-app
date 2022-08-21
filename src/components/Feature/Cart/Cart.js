import React from 'react';
import s from '../Cart/cart.module.css';

const Cart = ({ contentHeader, contentContent, link, contentFooter }) => {
  return (
      <div className={s.Cart}>
         <div>
            <p> {contentHeader} </p>
         </div>
         <div>
            <p> {contentContent} </p>
         </div>
         <div>
            <ul>
               <li>
                  <a href={link}>{contentFooter} </a>
               </li>
            </ul>
         </div>
      </div>
  );
};

export default Cart;
