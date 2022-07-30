import React from 'react';
import s from './Pricing.module.css';
import RenderCart from '../RenderCart/RenderCart';

const Pricing = (props) => {
  return <div className={s.Pricing} id='Pricing'>
    <RenderCart SelectTeammates={props.SelectTeammates} cartPrising={props.cartPrising}/>
  </div>;
};

export default Pricing;
