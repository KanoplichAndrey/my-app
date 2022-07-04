import React from 'react';

import imageSrc9 from '../../img/icon-Facebook.svg';
import imageSrc10 from '../../img/icon-Twitter.svg';
import imageSrc11 from '../../img/icon-linkedin.svg';
import imageSrc12 from '../../img/icon-Google.svg';
import imageSrc13 from '../../img/logo.svg';

import s from './Footer.module.css'

const Footer = () => {
  return <div className={s.Footer}>
    <div className={s.wrap} >
      <div className='logo'>
        <img title="my-img" src={imageSrc13} alt="my-img" />
      </div>


      <div className={s.icon}>
        <img title="my-img" src={imageSrc9} alt="my-img" />
        <img title="my-img" src={imageSrc10} alt="my-img" />
        <img title="my-img" src={imageSrc11} alt="my-img" />
        <img title="my-img" src={imageSrc12} alt="my-img" />
      </div>

      <div>

        <form method="" action="">
          <input type="text" placeholder="Subscribe" ></input>
        </form>
      </div>

    </div>
    <div className={s.info}>

      <span>Privacy Policy</span>
      <span>Terms of Conditions</span>
      <span>Legal</span>
      <span>Help</span>

    </div>
    <div><p>© 2020 All rights reserved</p></div>
  </div>




};

export default Footer;