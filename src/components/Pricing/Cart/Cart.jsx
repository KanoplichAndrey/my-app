import React from 'react';
import s from './Cart.module.css'

const Cart = (props) => {
    return (   
    
    <div className={s.cartPricing}>
      <div><p>{props.Starter}</p></div>
      <div><span>{props.prise}</span><span>{props.prisePeriud}</span></div>
      <div><p>{props.nameSelect}</p></div>

      <form action="#" method="#">
     <p>
       <select name="month">
          <option >{props.selectPeriud}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </p>
      <div><p>{props.Teammates}</p></div>
      <p>
       <select name="month">
          <option disabled>{props.userSelect}</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          
        </select>
      </p>
       
      <input type="submit" value={props.valueButton} ></input>
      </form>
    </div>

    )
};

export default Cart;