import React from 'react';

import imageSrc7 from '../Arrow_back.svg';
import imageSrc8 from '../Arrow_Forward.svg';

const Testimonials = () => {
    return  <div className='Testimonials'>
    <div ><h2>What People Are Saying</h2></div>
    <div className='Testimonials-cart-wrap' >
      <div className='circl1'>
      <img title="my-img" src={imageSrc7} alt="my-img"/>
      </div>
      <div className='circl2'>
      <img title="my-img" src={imageSrc8} alt="my-img"/>
      </div>
          <div className='Testimonials-cart'>
            <div className='Content-cart'>
              <p>
              ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’
              </p>
            </div>

            <div className='wrap_person' >
              <div className='icon_person'>

              </div>
              <div className='info_person'>
                  <p>Alexander F</p>
                  <p>IT Admin at Digital Group</p>
              </div>
            </div>
          </div>
          <div className='Testimonials-cart'>
          <div className='Content-cart'>
              <p>
              ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’
              </p>
            </div>

            <div className='wrap_person' >
              <div className='icon_person'>

              </div>
              <div className='info_person'>
                  <p>Robert B</p>
                  <p>UX Designer at Digital Group</p>
              </div>
            </div>
          </div>
          <div className='Testimonials-cart'>
          <div className='Content-cart'>
              <p>
              ‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’
              </p>
            </div>

            <div className='wrap_person' >
              <div className='icon_person'>

              </div>
              <div className='info_person'>
                  <p>Vadim Z</p>
                  <p>Executive at Digital Group</p>
              </div>
            </div>
          </div>
    </div>
  </div> 
};

export default Testimonials;