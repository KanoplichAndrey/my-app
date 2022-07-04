import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "../Cart/Cart";

export const VerticalSwipeToSlide  = ({array}) => {
   
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      arrows: false, 
      Infinity: true, 
   
    };


    



        return (
            <>

                <Slider {...settings}>
                    {
                        array.map((item, i) =>
                            <Cart {...item} key={i}/>
                        )
                    }


                </Slider>
            </>
        );
    
                }
