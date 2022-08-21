import React from 'react';
import s from './Cart.module.css';
import CartPrising from '../CartPrising/SelectPeriud';
import SelectTeammates from '../CartPrising/SelectTeammates';
// import Button from '../CartPrising/Button';
import Button from '../../button/Button';
function Cart ({ tarifplan, prise, prisePeriud, nameSelect, Teammates }) {
  return (
    <div className={s.cartPricing}>
      <div><p>{tarifplan}</p></div>
      <div><span>{prise}</span><span>{prisePeriud}</span></div>
      <div><p>{nameSelect}</p></div>
      <form action="#" method="#">
        <p>
          <CartPrising />
        </p>
        <div><p>{Teammates}</p></div>
        <p>
          <SelectTeammates />
        </p>
        <Button text={'Choose Plan'} customClass={s.input}/>
      </form>
    </div>

  );
}

export default Cart;
