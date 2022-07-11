import React from 'react';
import s from './CTA.module.css';

import imageSrc1 from '../../img/philips.svg';
import imageSrc2 from '../../img/logitech.svg';
import imageSrc3 from '../../img/amazon.svg';
import imageSrc4 from '../../img/facebook.svg';
import imageSrc5 from '../../img/google.svg';
import imageSrc6 from '../../img/linked.svg';



const CTA = () => {
  return <div className={s.CTA}>



    <form className={s.CTAWrap} method="" action="">
      <label><p>Modern & Digital Platform</p></label>

      <div><input type="text" placeholder="Type your email" ></input></div>
      <div><button type="submit" className={s.button}>Confirm</button></div>
    </form>

    <div className={s.sline}></div>

    <div className={s.brandWrap}>
      <div>
        <img title="my-img" src={imageSrc1} alt="my-img" />
      </div>
      <div>
        <img title="my-img" src={imageSrc2} alt="my-img" />
      </div>
      <div>
        <img title="my-img" src={imageSrc3} alt="my-img" />
      </div>
      <div>
        <img title="my-img" src={imageSrc4} alt="my-img" />
      </div>
      <div>
        <img title="my-img" src={imageSrc5} alt="my-img" />
      </div>
      <div>
        <img title="my-img" src={imageSrc6} alt="my-img" />
      </div>
    </div>


  </div>

};

export default CTA;