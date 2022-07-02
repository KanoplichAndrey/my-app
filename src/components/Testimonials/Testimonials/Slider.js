import React  from "react";  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from '../Cart/Cart';
import  './Slider.module.css' ;
// import RenderCart from "../RenderCart";
// import background from "./img/Arrow_back.svg";

// export function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", backgroundImage: "./img/Arrow_back.svg", color: 'red', fontSize: '67px'  }}
//         onClick={onClick}
//       />
//     );
//   }
  
//  export function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block",  backgroundImage: "../img/Arrow_back.svg", color: 'red'   }}
//         onClick={onClick}
//       />
//     );
//   }



// export const FocusOnSelect = ({array}) => {
//         const settings = {
//             // dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             arrows: true,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />
            
        // };

//         return (
//             <>
               
//                 <Slider {...settings}>
//                     {
//                         array.map((item, i) =>
//                             <Cart {...item} key={i}/>
//                         )
//                     }

                 
//                 </Slider>
//             </>
//         );
// }
