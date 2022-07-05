// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Cart from '../Cart/Cart';
// import s from'./Slider.module.css';
// // import RenderCart from "../RenderCart";
// // import background from "./img/Arrow_back.svg";

// export const FocusOnSelect = ({array}) => {
//         const settings = {
//              dots: false,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             arrows: true,
//             variableWidth: true,

// };

//         return (
//             <div className={s.slid}>

//                 <Slider {...settings}>
//                     {
//                         array.map((item, i) =>
//                             <Cart {...item} key={i}/>
//                         )
//                     }


//                 </Slider>
//             </div>
//         );
// }