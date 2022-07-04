import React from 'react';
import s from './Header.module.css';
import Menu from '../Menu/Menu';
import imageSrc13 from '../../img/logo.svg';




const Header = () => {

  // const setActive = ({ isActive }) => ({ color: isActive ? '#27a759' : '' });


  return <nav className={s.Header}>
    <div className={s.logo}>
      <img title="my-img" src={imageSrc13} alt="my-img" />
    </div>
    <div className={s.menu}>
      {/* <ul >
        <li ><NavLink to='/' style={setActive} >Home</NavLink></li>
        <li><NavLink to='/Features' style={setActive} >Features</NavLink></li>
        <li><NavLink to='/Pricing' style={setActive} >Pricing</NavLink></li>
        <li><a href='#'>About Us</a></li>
      </ul> */}


      <Menu />

    </div>
    <div>

      <span><a href='/Sign%20In'  >Sign In</a></span>
      <button className={s.button} >Sign Up</button>
    </div>
  </nav>
}

export default Header;