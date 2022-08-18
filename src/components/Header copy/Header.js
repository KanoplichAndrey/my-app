import React from 'react';
import logo from '../../img/logo.svg';
import Button from '../button/Button';
import Menu from '../Menu/Menu';
import s from './Header.module.css';
import Bars from '../bars/Bars';

const Header = () => {
//   const [btnState, setbtnState] = useState(false);
//   const colo = React.createRef();
//   function handeleClick () {
//     setbtnState(btnState => !btnState);
//     colo.current.className = 'btn';
//   }

  //   const toggleClassChek = btnState ? ' active ' : '';
  return (
   <header className={s.headerWrap}>
      <nav className={s.navigation} id="Home">
         <a href="#" className={s.logo} >
            <img title="my-img" src={logo} alt="my-img"
            //  className={`btn ${toggleClassChek}` }
            //    onClick={handeleClick}
               />
         </a>
         <Bars customClass={s.menuBtn} />
         <div className={s.menu}>
            {/* <div className={s.menuBtn} >
               <span className={s.iconBars} ></span>
            </div> */}
            <Menu />
         </div>
         <div>
            <span>
               <a href="#Sign%20In">Sign In</a>
            </span>
            <Button text={'Sign Up'} customClass={s.button} />
            <div></div>
         </div>
      </nav>
   </header>
  );
};

export default Header;
