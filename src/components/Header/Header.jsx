import React from 'react';
import s from './Header.module.css';
import Menu from '../Menu/Menu';
import logo from '../../img/logo.svg';
import Button from '../button/Button';
const Header = () => {

  return <nav className={s.Header} id='Home'>
    <a href='#' className={s.logo}>
      <img title="my-img" src={logo} alt="my-img" />
    </a>
    <div className={s.menu}>
      <Menu />
    </div>
    <div>
      <span><a href='#Sign%20In' >Sign In</a></span>
      <Button text={'Sign Up'} customClass={s.button} />
      <div>
      </div>
    </div>
  </nav>
}

export default Header;