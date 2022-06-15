import React from 'react';

import imageSrc1 from '../philips.svg';
import imageSrc2 from '../logitech.svg';
import imageSrc3 from '../amazon.svg';
import imageSrc4 from '../facebook.svg';
import imageSrc5 from '../google.svg';
import imageSrc6 from '../linked.svg';

const CTA = () => {
    return  <div className='CTA'>
        
    <form className='CTA-wrap' method="" action="">
    <div><p>Modern & Digital Platform</p></div>
    

    <div><input type="text" placeholder="Type your email" ></input></div>
    <div><button type="submit" className='button-cta'>Confirm</button></div>
    </form>
    <div className='line'></div>

  <div className='brand-wrap'>
    <div>
    <img title="my-img" src={imageSrc1} alt="my-img" />
    </div>
    <div>
    <img title="my-img" src={imageSrc2} alt="my-img" />
    </div>
    <div>
    <img title="my-img" src={imageSrc3} alt="my-img" />
    </div>
    <div>
    <img title="my-img" src={imageSrc4} alt="my-img" />
    </div>
    <div>
    <img title="my-img" src={imageSrc5} alt="my-img" />
    </div>
    <div>
    <img title="my-img" src={imageSrc6} alt="my-img" />
    </div>
  </div>
</div>  
};

export default CTA;