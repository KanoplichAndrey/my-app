import React from 'react';
import imageSrc from '../../img/picture.png';
import Form from '../Use/Form';
import s from './Sing_Up_Form.module.css'

const SingUpForm = () => {
  return <div className={s.SingUpForm} id='Sign%20In'>
    <div className={s.FormWrap}>


      <h3>Sign Up to Learn More About Design Struct</h3>
      <p className={s.titleContent}>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to the process</p>

      <div className={s.SingUpWrap}>

        {/* <form action="">
          <label for="Username"><b>Username</b></label>
          <input type="text" name="Username" ></input>

          <label for="email"><b>email</b></label>
          <input type="email" name="email" required></input>
          

          <label for="Password"><b>Password</b></label>
          <input type="Password" name="Password" required></input>
        </form> */}
        <Form />
      </div>


      {/* <div class={s.clearfix}>
        <input type="submit" tabindex="1" className={s.button}>Sign Up</input>
        <p>By signing up you agree with our  <a href='#'>Terms of Conditions</a> and Privacy Policy rules</p>
      </div> */}


    </div>

    <div className={s.picture}>
      <img title="my-img" src={imageSrc} alt="my-img" />
    </div>


  </div>

};

export default SingUpForm;