import React from 'react';
import s from './Header.module.css';
import Menu from '../Menu/Menu';
import imageSrc13 from '../../img/logo.svg';


const Header = () => {

  return <nav className={s.Header} id='Home'>
    <div className={s.logo}>
      <img title="my-img" src={imageSrc13} alt="my-img" />
    </div>
    <div className={s.menu}>
    
      <Menu />
    
      {/* <span>< NavLink to='/'>Home</NavLink></span>
      <span>< NavLink to='/Features'>Features</NavLink></span>
      <span>< NavLink to='/Pricing'>Pricing</NavLink></span>
      <span>< NavLink to='/About Us'>About Us</NavLink></span> */}
      
    </div>
    <div>

      <span><a href='#Sign%20In' >Sign In</a></span>
      <button className={s.button} >Sign Up</button>
    </div>
  </nav>
}

export default Header;