import React from 'react';
import s from './Testimonials.module.css';
import imageSrc7 from '../../../img/Arrow_back.svg';
import imageSrc8 from '../../../img/Arrow_Forward.svg';
import Cart from '../Cart/Cart';

const Testimonials = () => {
  return <div className={s.Testimonials}>
    <div ><h2>What People Are Saying</h2></div>
    <div className={s.wrap} >
      <div className={s.circl1}>
        <img title="my-img" src={imageSrc7} alt="my-img" />
      </div>
      <div className={s.circl2}>
        <img title="my-img" src={imageSrc8} alt="my-img" />
      </div>


      <Cart ContentCart='‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’ ' infoPerson='Alexander F ' profession='IT Admin at Digital Group' />
      <Cart ContentCart='‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’ ' infoPerson='Robert B ' profession='Designer at Digital Group' />
      <Cart ContentCart='‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’ ' infoPerson='Vadim Z' profession='Executive at Digital Group' />

    </div>
  </div>
};

export default Testimonials;