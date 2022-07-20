import React from 'react';
import s from './Pricing.module.css';
import RenderCart from '../RenderCart/RenderCart';
const Pricing = () => {
  return <div className={s.Pricing} id='Pricing'>
    <RenderCart />
  </div>;
};

export default Pricing;
