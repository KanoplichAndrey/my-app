import React from 'react';
import s from './Cart.module.css';
import IconePerson from '../CartTestemonials/IconePerson';

const Cart = ({ ContentCart, infoPerson, profession }) => {
  return (
      <div className={s.cart}>
         <div className={s.ContentCart}>
            <p>{ContentCart}</p>
         </div>
         <div className={s.wrapPerson}>
            <IconePerson />
            <div className={s.infoPerson}>
               <p>{infoPerson}</p>
               <p>{profession}</p>
            </div>
         </div>
      </div>
  );
};

export default Cart;
