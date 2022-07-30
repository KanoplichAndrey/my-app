import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cart from '../Cart/Cart';
// import s from'./Slider.module.css';
// import RenderCart from "../RenderCart";
// import background from "../../../img/Arrow_back.svg";

const arrowSize = '50px';

function SampleNextArrow (props) {
  const { className, onClick } = props;

  return (
        <div
            className={className}
            style={{ display: 'block', width: arrowSize, height: arrowSize }}
            onClick={onClick}
        />
  );
}

function SamplePrevArrow (props) {
  const { className, onClick } = props;
  return (
        <div
            className={className}
            style={{ display: 'block', width: arrowSize, height: arrowSize }}
            onClick={onClick}
        />
  );
}

export const FocusOnSelect = ({ array3 }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
    // variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
            <div className={'mySlider'}>
            <Slider {...settings}>
                {
                    array3.map((item, i) =>
                        <Cart {...item} key={i}/>
                    )
                }

            </Slider>
           </div>
  );
};
