import React from 'react';
import s from './Header.module.css';
import Menu from '../Menu/Menu';
import logo from '../../img/logo.svg';
import Button from '../button/Button';
const Header = () => {

  return <nav className={s.Header} id='Home'>
    <div className={s.logo}>
      <img title="my-img" src={logo} alt="my-img" />
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
      {/* <button className={s.button} >Sign Up</button> */}
      <Button text={'Sign Up'} customClass={s.button}/> 
      <div>
   
</div>
    </div>
  </nav>
}

export default Header;