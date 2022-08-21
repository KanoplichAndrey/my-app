import { React, useState, useEffect } from 'react';
import iconFacebook from '../../img/icon-Facebook.svg';
import iconTwitter from '../../img/icon-Twitter.svg';
import iconlinkedin from '../../img/icon-linkedin.svg';
import iconGoogle from '../../img/icon-Google.svg';
import logo from '../../img/logo.svg';
import s from './Footer.module.css';
import { getTextInfoFooter, getTextInfoFooter1 } from '../../servis/servis';

const icons = [iconFacebook, iconTwitter, iconlinkedin, iconGoogle];

const Footer = () => {
  // const textInfo = ['Privacy Policy', 'Terms of Conditions', 'Legal', 'Help'];
  // const textInfo1 = ['© 2020 All rights reserved'];
  const [textInfo, setTextInfo] = useState([]);
  const [textInfo1, setTextInfo1] = useState([]);
  useEffect(() => {
    const servistextInfo = getTextInfoFooter();
    setTextInfo(servistextInfo);
  }, []);
  useEffect(() => {
    const servistextInfo1 = getTextInfoFooter1();
    setTextInfo1(servistextInfo1);
  }, []);
  return (
    <div className={s.Footer} id="About Us">
      <div className={s.wrap}>
        <div className="logo">
          <img title="my-img" src={logo} alt="my-img" />
        </div>
        <div className={s.footerContent}>
          <div className={s.icon}>
            {icons.map((icon, index) => (
              <img title="my-img" key={index} src={icon} alt="my-img" />
            ))}
          </div>
          <div className={s.info}>
            {textInfo.map((info, index) => (
             <span key={index} >{info}</span>
            ))}
          </div>
          <div>
            <p>{textInfo1}</p>
          </div>
        </div>
        <div>
          <form method="" action="">
            <input type="text" placeholder="Subscribe"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
