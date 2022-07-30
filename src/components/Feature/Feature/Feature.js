import React from 'react';
import s from './Feature.module.css';
import { VerticalSwipeToSlide } from './Slider1';
import Button from '../../button/Button';

const Feature = (props) => {
  return (<div className={s.featureContainer} >
  <div className={s.featureWra} p>
    <div className={s.Feature } id='Features'>
      <div className={s.contentSlider}>
        <div className={s.cart}>
          <VerticalSwipeToSlide array={props.state.array} />
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
          <Button text={'More Features'} customClass={s.button} />
      </div>
    </div>
    </div>
  </div>
  );
};

export default Feature;
