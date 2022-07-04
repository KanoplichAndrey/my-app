import React from 'react';
import s from './Pricing.module.css'
import RenderCart from '../RenderCart/RenderCart';
const Pricing = () => {
  return <div className={s.Pricing}>

    <RenderCart />

    {/* <Cart tarifplan='Starter' prise='$49' prisePeriud='month' nameSelect='Period'  Teammates='Teammates'  />
    <Cart tarifplan='Premium' prise='$89' prisePeriud='month' nameSelect='Period'  Teammates='Teammates'   />
    <Cart tarifplan='Unlimited' prise='$199' prisePeriud='month' nameSelect='Period'  Teammates='Teammates'  />
     */}
  </div>
};

export default Pricing;