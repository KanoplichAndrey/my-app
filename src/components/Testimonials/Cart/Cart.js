import React from 'react';
import s from './Cart.module.css';
import IconePerson from '../CartTestemonials/IconePerson';

const Cart = (props) => {
  return (
      <div className={s.cart}>
         <div className={s.ContentCart}>
            <p>{props.ContentCart}</p>
         </div>
         <div className={s.wrapPerson}>
            <IconePerson />
            <div className={s.infoPerson}>
               <p>{props.infoPerson}</p>
               <p>{props.profession}</p>
            </div>
         </div>
      </div>
  );
};

export default Cart;
