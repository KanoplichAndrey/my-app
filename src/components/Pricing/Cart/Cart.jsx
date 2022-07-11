import React from 'react';
import s from './Cart.module.css'
import CartPrising from '../CartPrising/SelectPeriud';
import SelectTeammates from '../CartPrising/SelectTeammates'
// import Button from '../CartPrising/Button';
import Button from '../../button/Button';
function Cart(props) {
  return (

    <div className={s.cartPricing}>
      <div><p>{props.tarifplan}</p></div>
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
        <Button text={'Choose Plan'} customClass={s.input}/> 
        {/* <Button /> */}
      </form>
    </div>

  );
}

export default Cart;