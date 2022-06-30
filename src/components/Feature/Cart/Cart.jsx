import React from 'react';
import s from '../Cart/cart.module.css';


const Cart = (props) => {

  return <div className={s.Cart}>

    <div>
      <p> {props.contentHeader} </p>
    </div>
    <div>
      <p> {props.contentContent} </p>
    </div>
    <div>
      <ul>
        <li>
          <a href={props.link}> {props.contentFooter} </a>
        </li>
      </ul>
    </div>

  </div>
};

export default Cart;