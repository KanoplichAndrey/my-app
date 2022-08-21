import React from 'react';
import s from './Testimonials.module.css';
import { FocusOnSelect } from './Slider';

const Testimonials = () => {
  return (
      <div className={s.Testimonials}>
         <div>
            <h2>What People Are Saying</h2>
         </div>
         <FocusOnSelect />
      </div>
  );
};

export default Testimonials;
