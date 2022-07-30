import React from 'react';
import s from './Testimonials.module.css';
import { FocusOnSelect } from './Slider';

const Testimonials = (props) => {
  return (
      <div className={s.Testimonials}>
         <div>
            <h2>What People Are Saying</h2>
         </div>
         <FocusOnSelect array3={props.state.array3} />
      </div>
  );
};

export default Testimonials;
