import React from 'react';
import s from './Pricing.module.css'
import Cart from '../Cart/Cart';
const Pricing = () => {
  return <div className={s.Pricing}>
    <Cart tariff plan='Starter' prise='$49' prisePeriud='month' nameSelect='Period'  Teammates='Teammates' valueButton="Choose Plan" />
    <Cart tariff plan='Premium' prise='$89' prisePeriud='month' nameSelect='Period'  Teammates='Teammates'  valueButton="Choose Plan" />
    <Cart tariff plan='Unlimited' prise='$199' prisePeriud='month' nameSelect='Period'  Teammates='Teammates'  valueButton="Choose Plan" />

  </div>
};

export default Pricing;