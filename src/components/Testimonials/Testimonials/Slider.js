import React,  { Component } from "react";  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from '../Cart/Cart';


export const FocusOnSelect = ({array}) => {
        const settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            
            
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
