import { React, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cart from '../Cart/Cart';
import { getArrayBase1 } from '../../../servis/servis';
export const VerticalSwipeToSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    Infinity: true

  };
  const [array, setArray] = useState([]);

  useEffect(() => {
    const servisArray = getArrayBase1();
    setArray(servisArray);
  }, []);

  return (
            <div className={'Slider1'}>

                <Slider {...settings}>
                    {
                        array.map((item, i) =>
                            <Cart {...item} key={i}/>
                        )
                    }
                </Slider>
            </div>
  );
};
