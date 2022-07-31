import React from 'react';
import iconFacebook from '../../img/icon-Facebook.svg';
import iconTwitter from '../../img/icon-Twitter.svg';
import iconlinkedin from '../../img/icon-linkedin.svg';
import iconGoogle from '../../img/icon-Google.svg';
import logo from '../../img/logo.svg';
import s from './Footer.module.css';
import Button from '../button copy/Button';
const icons = [iconFacebook, iconTwitter, iconlinkedin, iconGoogle];

const Footer = (props) => {
  const newf = React.createRef();

  function addPost () { const text = newf.current.value; props.addPost(text); }

  return <div className={s.footerWrap}>
  <div className={s.Footer} id='About Us'>
    <div className={s.wrap} >
      <div className='logo'>
        <img title="my-img" src={logo} alt="my-img" />
      </div>
      <div className={s.footerContent}>
        <div className={s.icon}>
          {icons.map((icon, index) => <img key={index} title="my-img" src={icon} alt="my-img" />)}
        </div>
        <div className={s.info}>
          {props.state.textInfo.map((info, index) => <span key={index}>{info}</span>)}
        </div>
        <div className={s.info2}>
          <span>{props.state.textInfo1}</span>
        </div>
      </div>
      <div className={s.inputFooter}>
        <form method="" action="">
          <input type="text" placeholder="Subscribe" ></input>
        </form>
      </div>
    </div>
  </div>

  <Button className='fff' chidren={'button text'} onClick = {addPost} active/>
        <br></br><br></br><textarea ref={newf}></textarea>

        <br></br><br></br>
        <div>

        {props.state.post.map((p) => <p key={p.names}>{p.names}</p>)}
        </div>
  </div>;
};

export default Footer;
