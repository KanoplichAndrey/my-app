import React from 'react';
import s from './Feature.module.css';
import Cart from '../Cart/Cart'


const Feature = () => {

  return (
    <div className={s.Feature}>
      <div className={s.dot + ' ' + s.dot1} ></div>
      <div className={s.dot + ' ' + s.dot2} ></div>
      <div className={s.dot + ' ' + s.dot3} ></div>
      <div className={s.dot + ' ' + s.dot4} ></div>


      <div className={s.contentSlider}>

        <div className={s.cart}>

          <Cart contentHeader='First Feature ' contentContent='Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons' link='https://en.wikipedia.org/wiki/Tom_and_Jerry' contentFooter='Learn More' />
          <Cart contentHeader='First Feature ' contentContent='Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons' link='https://en.wikipedia.org/wiki/Tom_and_Jerry' contentFooter='Learn More' />
          <Cart contentHeader='First Feature ' contentContent='Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons' link='https://en.wikipedia.org/wiki/Tom_and_Jerry' contentFooter='Learn More' />

        </div>
      </div>

      <div className={s.content}>
        <div>
          <h2>Headline of Modern & Digital Lending Platform Seconds</h2>
        </div>
        <div>
          <p>
            Nowadays, it isn’t uncommon to see lenders rapidly adopting  a <br />digital lending strategy to streamline the lending process Gorgeous, high-quality design system for mobile, tablet & desktop devices
          </p>
        </div>

        <button className={s.button}>More Features</button>

      </div>

    </div>)
};

export default Feature;