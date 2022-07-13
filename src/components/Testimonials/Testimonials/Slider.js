import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from '../Cart/Cart';
// import s from'./Slider.module.css';
// import RenderCart from "../RenderCart";
// import background from "../../../img/Arrow_back.svg";

const arrowSize = '50px'

function SampleNextArrow(props) {
    const { className,  onClick } = props;
    return (
        <div
            className={className}
            style={{display: "block", width: arrowSize, height: arrowSize }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className,  onClick } = props;
    return (
        <div
            className={className}
            style={{display: "block", width: arrowSize, height: arrowSize }}
            onClick={onClick}
        />
    );
}

export const FocusOnSelect = ({array}) => {
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
            prevArrow: <SamplePrevArrow />
            // responsive: [
            //     {
            //       breakpoint: 1024,
            //       settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3,
            //         infinite: true,
            //         dots: true
            //       }
            //     },
            //     {
            //       breakpoint: 600,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //         initialSlide: 2
            //       }
            //     },
            //     {
            //       breakpoint: 480,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
            };
        return (
            <div className={'mySlider'}>
            <Slider {...settings}>
                {
                    array.map((item, i) =>
                        <Cart {...item} key={i}/>
                    )
                }

            </Slider>
           </div>


        // .mySlider .slick-slider{
        // color: aqua;
        // position: absolute;
        // }
        );
}