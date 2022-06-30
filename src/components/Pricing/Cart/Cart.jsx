import React from 'react';
import s from './Cart.module.css'
import CartPrising from '../../CartPrising/SelectPeriud';
import SelectTeammates from '../../CartPrising/SelectTeammates'

function Cart(props) {
  return (

    <div className={s.cartPricing}>
      <div><p>{props.Starter}</p></div>
      <div><span>{props.prise}</span><span>{props.prisePeriud}</span></div>
      <div><p>{props.nameSelect}</p></div>
      <form action="#" method="#">
        <p>
         <CartPrising />
        </p>
        <div><p>{props.Teammates}</p></div>
        <p>
          <SelectTeammates /> 
        </p>

        <input type="submit" value={props.valueButton}></input>
      </form>
    </div>

  );
}

export default Cart;