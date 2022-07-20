import React from 'react';
import s from './CTA.module.css';
import philips from '../../img/philips.svg';
import logitech from '../../img/logitech.svg';
import amazon from '../../img/amazon.svg';
import facebook from '../../img/facebook.svg';
import google from '../../img/google.svg';
import linked from '../../img/linked.svg';
import Button from '../button/Button';

const icons = [philips, logitech, amazon, facebook, google, linked];

const CTA = () => {
  return <div className={s.CTA}>
        <form className={s.CTAWrap} method="" action="">
            <label>
                <p>Modern & Digital Platform</p>
            </label>
            <div>
                <input type="text" placeholder="Type your email"/>
            </div>
            <div>
                <Button type="submit" text={'Confirm'} customClass={s.button}/>
            </div>
        </form>
        <div className={s.sline}/>
        <div className={s.brandWrap}>
            { icons.map((icon, index) => (
                     <div key={index}>
                        <img title="my-img" src={icon} alt="my-img"/>
                     </div>
            )
            ) }
        </div>
    </div>;
};

export default CTA;
