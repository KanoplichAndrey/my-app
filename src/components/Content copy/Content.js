import React, { useEffect, useState } from 'react';
import s from './Content.module.css';
import bell from '../../img/iPad/bell.svg';
import flash from '../../img/iPad/flash.svg';
import grid from '../../img/iPad/grid.svg';
import Logo from '../../img/iPad/Logo.svg';
import pricetags from '../../img/iPad/pricetags.svg';
import search from '../../img/iPad/search.svg';
import IpadCart from '../ipad/IpadCart';
import bellGRAY from '../../img/iPad/bellGRAY.svg';
import IconePerso from '../IconePerson/IconePerso';
import Input from '../input/Input';
import CartIPad from '../CartIPad/CartIPad';
import { getIconePerson, getArray1, getArray2 } from '../../servis/servis';

const icons = [Logo, grid, flash, search, bell, pricetags, grid, grid, grid];
// const iconePerso = ['IconePerson', 'IconePerson', 'IconePerson', 'IconePerson'];
// const array1 = [
//   {
//     infoPerson: 'John Shinoda',
//     time: 'Hey man, how R U???…',
//     profession: '10:20'
//   },
//   {
//     infoPerson: 'Dina Harrison',
//     time: 'Hey, call me please…',
//     profession: '10:20'
//   },
//   {
//     infoPerson: 'Mandy Guoles',
//     time: 'Let me be alone, please…',
//     profession: '10:20'
//   },
//   {
//     infoPerson: 'Sam Pettersen',
//     time: 'Hey dude, where is my…',
//     profession: '10:20'
//   }
// ];

// const array2 = [
//   {
//     infoPerson: 'PhotoDanver.jpg',
//     time: '10.12.2020 at 11:43',
//     profession: '175 Kb'
//   },
//   {
//     infoPerson: 'PhotoDanver.jpg',
//     time: '10.12.2020 at 11:43',
//     profession: '175 Kb'
//   },
//   {
//     infoPerson: 'PhotoDanver.jpg',
//     time: '10.12.2020 at 11:43',
//     profession: '175 Kb'
//   },
//   {
//     infoPerson: 'PhotoDanver.jpg',
//     time: '10.12.2020 at 11:43',
//     profession: '175 Kb'
//   }
// ];

const Content = () => {
  const [IconePersons, setIconepersons] = useState([]);
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  useEffect(() => {
    const servisIconePersons = getIconePerson();
    setIconepersons(servisIconePersons);
    const servisarray1 = getArray1();
    setArray1(servisarray1);
    const servisarray2 = getArray2();
    setArray2(servisarray2);
  }, []);
  return (

   <div>
      <div className={s.Content}>
         <div>
            <p>Long Headline Sample</p>
         </div>
         <div>
            <h1>Headline of Modern & Digital Platform</h1>
         </div>
         <div>
            <p>
               Nowadays, it isn’t uncommon to see lenders rapidly adopting a
               digital lending strategy{' '}
            </p>
         </div>
         <div>
            <ul className={s.sd}>
               <li className={s.sf}>
                  <a href="#">Learn More</a>
               </li>
            </ul>
         </div>
      </div>
      <div className={s.Wrap}>
         <div className={s.ipad}>
            <div className={s.gridWrap}>
               <div className={s.column1}>
                  {icons.map((icon, index) => (
                     <img key={index} title="my-img" src={icon} alt="my-img" />
                  ))}
               </div>
               <div className={s.column2}>
                  <IpadCart
                     name="Ivan O"
                     status="Online"
                     customClass={s.IpadCart}
                  />
                  <div className={s.line}></div>
                  <div className={s.online}>
                     <span>Friends Online</span>
                     <span>23</span>
                     <div className={s.gridicon}>
                        {IconePersons.map((item, i) => (
                           <IconePerso
                              customClass={s.IconePerson}
                              {...item}
                              key={i} />
                        ))}
                     </div>
                  </div>
                  <div className={s.line}></div>
                  <div className={s.Chats}>
                     <p>Chats</p>
                     <Input />
                  </div>
                  <div>
                     {array1.map((item, i) => (
                        <CartIPad {...item} key={i} />
                     ))}
                  </div>
               </div>
               <div className={s.column3}>
                  <div className={s.wrapcolumn3}>
                     <div>
                        <Input customClass={s.col3Input} />
                     </div>
                     <div className={s.chat}>
                        <p>Chat with</p>
                     </div>
                     <div>
                        <p>Evgeny P</p>
                     </div>
                     <div>
                        <p>
                           Hey Ivan, would U like to drink some coffe with me? )
                        </p>
                     </div>
                     <div>
                        <p>
                           20:21
                        </p>
                     </div>
                     <div>
                        <p>
                            Shure! Maybe 16:00 ?
                        </p>
                     </div>
                     <div>
                        <p>20:21</p>
                     </div>
                     <div>
                        <p>
                        Emm, no. Maybe at 10? Cuz i have to finish my home work. My professor is jackass…
                        </p>
                     </div>
                     <div>
                        <p>
                           20:21
                        </p>
                     </div>
                     <div>
                        <p>
                        Wow, i heard that he is nerd, but never that he is a jackass. Anyway at 10 is ok. Would be my motivation get up earler)
                        </p>
                     </div>
                     <div>
                        <p>
                           20:21
                        </p>
                     </div>

                     <div>
                        <p>
                        Yay) I have a tons stories about that man…Ok, have a nice evening, see ya!
                        </p>
                     </div>
                     <div>
                        <p>20:21</p>
                     </div>
                     <div>
                        <p>
                        See ya)
                        </p>
                     </div>
                     <div>
                        <p>20:21</p>
                     </div>
                     {/* <div>
                        <p>
                           Hey Ivan, would U like to drink some coffe with me? )
                        </p>
                     </div>
                     <div>
                        <p>20:21</p>
                     </div>
                     <div>
                        <p>
                           Hey Ivan, would U like to drink some coffe with me? )
                        </p>
                     </div>
                     <div>
                        <p>20:21</p>
                     </div> */}
                     <div>
                        <div>
                           <IconePerso />
                        </div>
                        <div>
                           <Input />
                        </div>
                        <div></div>
                     </div>
                  </div>
               </div>
               <div className={s.column4}>
                  {/* <div className={s.wrapcolumn4}> */}
                  <div className={s.dateWrap}>
                     <div>
                        <p>28 February 2022</p>
                     </div>
                     <div>
                        <img title="my-img" src={bellGRAY} alt="my-img" />
                     </div>
                  </div>
                  <div className={s.ipadcartwrap}>
                     <IpadCart
                        name="Evgen P"
                        status="Online"
                        customClass={s.ICart}
                     />
                  </div>
                  <div>
                     <div className={s.line}></div>
                  </div>
                  <div className={s.sharedWrap}>
                     <p className={s.shared}>Shared Files</p>
                     <a className={s.href} href="#">
                        see all
                     </a>
                  </div>
                  <div className={s.gap}>
                     {array2.map((item, i) => (
                        <CartIPad customClass={s.caIpad} {...item} key={i} />
                     ))}
                  </div>
                  <div className={s.line}></div>
                  <div className={s.sharedWrap}>
                     <p className={s.shared}>Shared Files</p>
                     <a className={s.href} href="#">
                        see all
                     </a>
                  </div>

                  <div className={s.contcart}>
                     <div className={s.cont}>
                        <div className={s.contInf}>
                           <p>Dribbble.com</p>
                           <p>10.12.2020</p>
                        </div>

                        <div className={s.profession}>
                           <p>10:32pm</p>
                        </div>
                     </div>
                     {/* </div> */}

                     <div className={s.contcart}>
                        <div className={s.cont}>
                           <div className={s.contInf}>
                              <p>Awwwards.com </p>
                              <p>10.12.2020</p>
                           </div>

                           <div className={s.profession}>
                              <p>10:32pm</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
  );
};

export default Content;
