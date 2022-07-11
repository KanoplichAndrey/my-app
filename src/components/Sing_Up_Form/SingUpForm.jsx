import React from 'react';
import picture from '../../img/picture.png';
import Form from '../Use/Form';
import s from './Sing_Up_Form.module.css'

const SingUpForm = () => {
  return <div className={s.SingUpForm} id='Sign%20In'>
    <div className={s.FormWrap}>
      <h3>Sign Up to Learn More About Design Struct</h3>
      <p className={s.titleContent}>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to the process</p>
      <div className={s.SingUpWrap}>
        <Form />
      </div>
    </div>
    <div className={s.picture}>
      <img title="my-img" src={picture} alt="my-img" />
    </div>
  </div>
};

export default SingUpForm;