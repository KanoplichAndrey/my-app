import React from 'react';
import s from './Feature.module.css';
// import Cart from '../Cart/Cart'
// import RenderCart from '../FeatureRenderCart/RenderCart';
import { VerticalSwipeToSlide } from './Slider1';

const array = [
  {
    contentHeader: 'First Feature ',
    contentContent: 'Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons',
    link: 'https://en.wikipedia.org/wiki/Tom_and_Jerry',
    contentFooter: 'Learn More',
  },
  {
    contentHeader: 'Second Feature ',
    contentContent: 'Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons',
    link: 'https://en.wikipedia.org/wiki/Tom_and_Jerry',
    contentFooter: 'Learn More',
  },
  {
    contentHeader: 'First Feature ',
    contentContent: 'Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons',
    link: 'https://en.wikipedia.org/wiki/Tom_and_Jerry',
    contentFooter: 'Learn More',
  }, {
    contentHeader: 'First Feature ',
    contentContent: 'Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons',
    link: 'https://en.wikipedia.org/wiki/Tom_and_Jerry',
    contentFooter: 'Learn More',
  },

]


const Feature = () => {

  return (

    <div className={s.Feature} id='Features'>
      {/* <div className={s.dot + ' ' + s.dot1} ></div>
      <div className={s.dot + ' ' + s.dot2} ></div>
      <div className={s.dot + ' ' + s.dot3} ></div>
      <div className={s.dot + ' ' + s.dot4} ></div> */}


      <div className={s.contentSlider}>

        <div className={s.cart}>
          {/* <RenderCart /> */}
          <VerticalSwipeToSlide array={array} />
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