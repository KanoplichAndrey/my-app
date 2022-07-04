import React from 'react';
import s from './Content.module.css';

import imageSrc1 from '../../img/imgphone.svg'
const Content = () => {
  return <div className={s.Content}>
    <div>
      <p>Long Headline Sample</p>
    </div>
    <div>
      <h1>Headline of Modern & Digital Platform</h1>
    </div>
    <div>
      <p>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy </p>
    </div>
    <div>
      <ul>
        <li>
          <a href="#">Learn More</a>
        </li>
      </ul>
    </div>
    <div>

      <img title="my-img" src={imageSrc1} alt="my-img" />
    </div>
  </div>

};

export default Content;